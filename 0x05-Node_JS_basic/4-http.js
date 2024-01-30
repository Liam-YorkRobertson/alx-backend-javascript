// small http server using node

const http = require('http');

const app = http.createServer((req, res) => {
  res.end('Hello Holberton School!\n');
});

app.listen(1245);

module.exports = app;
