const path = require('path');   

app.get('/sw.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'sw.js'), {
    headers: {
      'Content-Type': 'application/javascript'
    }
  });
});   