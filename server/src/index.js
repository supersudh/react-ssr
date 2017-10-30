const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');

const { default: Home } = require('./client/components/Home');
const app = express();

app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  res.send(content);
});

app.listen(3000, console.log.bind(this, 'listening on port 3000'));
