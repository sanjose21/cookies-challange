const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());

app.get('/login', (req, res) => {
  const { name } = req.query;
  res.cookie('name', name);
  res.send(`Cookie has been set for ${name}!`);
});

app.get('/hello', (req, res) => {
  const { name } = req.cookies;
  if (name) {
    res.send(`Welcome ${name}!`);
  } else {
    res.send('Please log in first.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
