const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  res.sendFile('/index.html', { root: __dirname }, (err) => {
    if (err) {
      console.error('error', err);
    } else {
      console.log('Sent: ', 'index.html');
    }
  });
});

app.get('/about', (req, res) => {
  res.sendFile('/about.html', { root: __dirname }, (err) => {
    if (err) {
      console.error('error', err);
    } else {
      console.log('Sent: ', 'about.html');
    }
  });
});

app.get('/contact-me', (req, res) => {
  res.sendFile('/contact-me.html', { root: __dirname }, (err) => {
    if (err) {
      console.error('error', err);
    } else {
      console.log('Sent: ', 'contact-me.html');
    }
  });
});

app.use((req, res) => {
  res.status(404).sendFile('/404.html', { root: __dirname }, (err) => {
    if (err) {
      console.error('error', err);
    } else {
      console.log('Sent: ', '404.html');
    }
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
