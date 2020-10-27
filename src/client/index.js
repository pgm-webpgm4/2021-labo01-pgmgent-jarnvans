/**
 * The Web Client
 */

const express = require('express');
const app = express();
const port = 8080;

app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));

const startClient = () => {
  return new Promise((resolve, reject) => {
    app.listen(port, (err) => {
      if (err) reject('Server could not start');
      console.log("Starting the client...");
      console.log(`Client started running on http://localhost:${port}...`);
      resolve();    
    })
  })
}

app.get('/', (req, res) => {
  res.redirect('/blog');
})

app.get('/blog', (req, res) => {
  res.sendFile(`${__dirname}/pages/index.html`);
})

app.get('/blog/create', (req, res) => {
  res.sendFile(`${__dirname}/pages/create-post.html`);
})

app.get('/blog/:id', (req, res) => {
  res.sendFile(`${__dirname}/pages/detail.html`);
})

module.exports = { startClient };