const express = require('express');
const app = express();
const port = 8080; // You can choose any available port

app.get('/', (req, res) => {
  res.send('Hello Supawit');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
