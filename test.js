const http = require("http");
http
  .createServer((req, res) => {
    console.log(req,'-------req');
    res.end("ok");
  })
  .listen(8080);
