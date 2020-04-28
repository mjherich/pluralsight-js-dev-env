import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const PORT = 3000;
const app = express();

/* eslint-disable no-console */

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
})

app.get('/users', function(req, res) {
  res.json([
    {"id": 1, "firstName": "Matt", "lastName": "Herich", "enail": "email1@test.com"},
    {"id": 2, "firstName": "Bob", "lastName": "Doe", "enail": "email2@test.com"},
    {"id": 3, "firstName": "Alice", "lastName": "Brown", "enail": "email3@test.com"}
  ]);
});

app.listen(PORT, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + PORT);
  }
})
