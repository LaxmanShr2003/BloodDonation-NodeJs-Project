// routes/form.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('accountcreate', { error: null });
});

router.post('/', (req, res) => {
  const { textbox } = req.body;

  // Simple validation
  if (!textbox || textbox.trim() === '') {
    res.render('form', { error: 'Textbox cannot be empty' });
  } else {
    res.render('form', { error: null });
    console.log(`Received input: ${textbox}`);
  }
});

module.exports = router;
