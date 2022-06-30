const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // console.log('server created');
  // console.log(req.url, req.method);
  res.setHeader('conten-type', 'text/plain');
  // res.write('hello');
  // res.end();
  let path = './FrontEndFiles';
  switch (req.url) {
    case '/':
      path += '/index.html';
      break;
    case '/about':
      path += '/about.html';
      break;

    default:
      path += '/page404.html';
      break;
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, 'localhost', () => {
  console.log('listening on portn 3000');
});
