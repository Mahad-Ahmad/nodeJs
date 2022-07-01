const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
  // console.log('server created');
  // console.log(req.url, req.method);
  console.log(_.random());
  const greet = _.once(() => {
    console.log('run once');
  });
  greet();
  greet();

  res.setHeader('conten-type', 'text/plain');
  // res.write('hello');
  // res.end();
  let path = './FrontEndFiles';
  switch (req.url) {
    case '/':
      path += '/index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += '/about.html';
      res.statusCode = 200;
      break;
    case 'about-me':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
    default:
      path += '/page404.html';
      res.statusCode = 404;
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
