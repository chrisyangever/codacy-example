import fetch from 'node-fetch';

const express = require('express')
const app = express()
const port = 3000

var accessToken = '12w23sdag234dfgr';

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', async (req, res) => {
  const response = await fetch('https://api.github.com/users/github');
  const data = await response.json();
  return data;
});

var add = (num1, num2) => {
  return num1 + num2;
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})