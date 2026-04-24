const express = require('express');
const cors = require('cors');
const app = express();
const { scramjetPath } = require('@mercuryworkshop/scramjet/path');
const port = 2222;
const corsOptions = {
  origin: ['http://localhost:5173']
};

app.use(cors(corsOptions));

app.get('/api', (req, res) => {
  res.json({'key': 0, 'ver': 1.0});
});

app.listen(port, () => {
  console.warn(`Server started on Port: ${port}`);
  console.warn(`Link: http://localhost:${port}`);
});