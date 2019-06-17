const express = require('express');
const path = require('path');
const compress = require('compress');

const app = express();
const port = process.env.PORT || 9000;

app.use(compress());
app.use(express.static(path.resolve(__dirname, './dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, ('./dist/index.html')));
});

app.listen(port, () => {
  console.log(`Server is Listening on ${port}`);
});
