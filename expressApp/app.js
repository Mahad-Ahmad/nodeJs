const express = require('express');
var path = require('path');

const app = express();

app.listen(3000);

app.get('/', (req, res) => {
  res.sendFile(path.resolve('../frontEndFiles/index.html'));
  //   res.sendFile(path.resolve('../frontEndFiles/index.html'), {
  //     root: './express',
  //   });
});

app.get('/about', (req, res) => {
  res.sendFile(path.resolve('../frontEndFiles/about.html'));
});

app.get('/about-me', (req, res) => {
  res.redirect('/about');
});

app.use((req, res) => {
  res.status(404).res.sendFile(path.resolve('../frontEndFiles/page404.html'));
});
