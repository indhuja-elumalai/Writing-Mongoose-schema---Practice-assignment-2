const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { resolve } = require('path');
const BlogPost = require('./schema');

const app = express();
const port = 3000;

app.use(express.static('static'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
