import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const PORT = 3000;
const app = express();
const compiler = webpack(config);

/* eslint-disable no-console */

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
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
