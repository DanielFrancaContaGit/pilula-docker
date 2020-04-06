const express = require('express');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 3000;
const baseDir = `${__dirname}/build`;

const app = express();

app.use(cors());

app.use(express.static(`${baseDir}`));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'))
});

app.listen(PORT);
