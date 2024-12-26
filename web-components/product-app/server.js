const express = require('express');
const path = require('path');

const app = express();
const PORT = 3002;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS'); 
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Home App running at http://localhost:${PORT}`);
});
