// routes/form.js
const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
  res.render('form', { error: null });
});

router.post('/register', (req, res) => {
  const { name, email, password, confirm_password } = req.body;

  // Basic validation
  if (!name || !email || !password || !confirm_password) {
    res.render('form', { error: 'All fields are required' });
  } else if (password !== confirm_password) {
    res.render('form', { error: 'Passwords do not match' });
  } else {
    // Here you would typically handle form submission, e.g., save user to the database
    console.log(`Received input: Name=${name}, Email=${email}, Password=${password}`);
    res.render('form', { error: null });
  }
});

module.exports = router;
