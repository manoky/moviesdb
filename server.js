const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 9000;

app.use(compression());
app.use(express.static(path.resolve(__dirname, './dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, ('./dist/index.html')));
});

app.listen(port, () => {
  console.log(`Server is Listening on ${port}`);
});
