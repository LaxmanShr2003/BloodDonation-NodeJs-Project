const sql = require('mysql')
const db = sql.createConnection

const connection = sql.createConnection({
    host: 'localhost',  // Your MySQL host
    user: 'root',   // Your MySQL username
    password: 'Sql@200#', // Your MySQL password
    database: 'blood_database' // Your MySQL database name
  });

  
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL');
      return;
    }
    console.log('Connected to database successfully');
  });

  module.exports= connection