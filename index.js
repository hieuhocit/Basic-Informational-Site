const { createServer } = require('http');
const fs = require('fs');

const server = createServer();

server.on('request', (req, res) => {
  req.on('error', (err) => {
    console.error(err.stack);
  });

  const { url } = req;

  let pathFile = __dirname;

  switch (url) {
    case '/': {
      pathFile += '/index.html';
      break;
    }
    case '/about': {
      pathFile += '/about.html';
      break;
    }
    case '/contact-me': {
      pathFile += '/contact-me.html';
      break;
    }
    default: {
      pathFile += '/404.html';
      const page = fs.readFileSync(pathFile, 'utf8');
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(page);
      return;
    }
  }

  try {
    const page = fs.readFileSync(pathFile, 'utf8');

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(page);
  } catch (error) {
    console.error(error);
  }
});

server.listen(8080, 'localhost', () => {
  console.log('Sever running at http://localhost:8080');
});
