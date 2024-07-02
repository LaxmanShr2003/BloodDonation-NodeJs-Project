const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const fs = require("fs");
const nodemailer = require("nodemailer");
const connection = require("./database");
const path = require("path");
const app = express();
const formRouter = require("./routes/form");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "my_super_secret_key_2024!$#", // Replace with a long random string (used for session encryption)
    resave: false,
    saveUninitialized: false,
  })
);

// Login POST route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Validate user credentials
  const query = "SELECT * FROM users WHERE email = ? AND password = ?";
  connection.query(query, [email, password], (error, results) => {
    if (error) {
      console.error("Error querying database:", error);
      return res.status(500).send("Internal Server Error");
    }

    if (results.length > 0) {
      // User authenticated, create session
      req.session.user = results[0]; // Store user details in session
      res.redirect("/profile"); // Redirect to profile page or dashboard
    } else {
      // Invalid credentials
      res.status(401).send("Invalid email or password");
    }
  });
});

// Profile page route (example)
app.get("/profile", (req, res) => {
  const { user } = req.session;
  if (user) {
    res.render("profile", { user }); // Render profile page with user data
  } else {
    res.redirect("/login"); // Redirect to login page if session doesn't exist
  }
});

// Login form route (rendering)
app.get("/login", (req, res) => {
  res.render("login"); // Render login form
});

// Logout route
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      return res.status(500).send("Internal Server Error");
    }
    res.redirect("/"); // Redirect to login page after logout
  });
});

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Route to display database data
app.get("/views/index", (req, res) => {
  // Example query to fetch data from 'donation' table
  connection.query("SELECT * FROM donation", (err, results) => {
    if (err) {
      console.error("Error fetching data from MySQL: ", err.stack);
      res.status(500).send("Error fetching data from MySQL");
      return;
    }
    // Render 'index' view with fetched data
    res.render("index", { donations: results });
  });
});

app.get("/views/request", (req, res) => {
  // Example query to fetch data from 'donation' table
  connection.query("SELECT * FROM request", (err, results) => {
    if (err) {
      console.error("Error fetching data from MySQL: ", err.stack);
      res.status(500).send("Error fetching data from MySQL");
      return;
    }
    // Render 'index' view with fetched data
    res.render("request", { requests: results });
  });
});

app.get("/views/users", (req, res) => {
  // Example query to fetch data from 'donation' table
  connection.query("SELECT * FROM request", (err, results) => {
    if (err) {
      console.error("Error fetching data from MySQL: ", err.stack);
      res.status(500).send("Error fetching data from MySQL");
      return;
    }
    // Render 'index' view with fetched data
    res.render("users", { users: results });
  });
});

app.post("/Donate", (req, res) => {
  console.log("req body", req.body);
  const { name, email, phone, bloodtype, date } = req.body;
  // const donerData = [data.name, data.email, data.phone, data.type, data.date];
  const donerData = {
    FullName: name,
    Email: email,
    PhoneNumber: phone,
    blood_group: bloodtype,
    donation_date: date,
  };

  var query = connection.query(
    "INSERT INTO donation SET ?",
    donerData,
    function (error, results, fields, res) {
      console.log("result", results, fields);

      if (error) throw error;
      // Neat!
    }
  );
  console.log(query.sql);

  res.redirect("/");
});

// donate post operation
app.post("/users", (req, res) => {
  console.log("req body", req.body);
  const { name, email, password } = req.body;
  const User = {
    name: name,
    email: email,
    password: password,
  };

  var query = connection.query(
    "INSERT INTO users SET ?",
    User,
    function (error, results, fields, res) {
      console.log("result", results, fields);

      if (error) throw error;
      // Neat!
    }
  );
  console.log(query.sql);

  res.redirect("/");
});

//resquest data add operation
app.post("/request", (req, res) => {
  console.log("req body", req.body);
  const { name, phone, address, hname, btype, date } = req.body;
  const requestData = {
    FullName: name,
    PhoneNumber: phone,
    Address: address,
    HospitalName: hname,
    BloodType: btype,
    RequestDate: date,
  };

  var query = connection.query(
    "INSERT INTO request SET ?",
    requestData,
    function (error, results, fields, res) {
      console.log("result", results, fields);

      if (error) throw error;
      // Neat!
    }
  );
  console.log(query.sql);

  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
