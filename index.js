const express = require('express');
const app = express();
const path = require('path');

//app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/public'));
app.use(express.static('public'));

//app.use('/', express.static(__dirname + 'public'));
//app.use('/', express.static(__dirname + 'public'));

//console.log(path.resolve(__dirname, 'pages/index.html'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages/about.html'));
});
app.get('/contact', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
});
app.get('/post', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages/post.html'));
});

app.listen(4000, () => {
  console.log('APP LISTENING ON port 4000');
});
