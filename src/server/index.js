/**
 * The Server
 */

const express = require('express');
const app = express();
const port = 5050;
const cors = require('cors');
const bodyParser = require('body-parser');

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

// const fileUpload = require('express-fileupload');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.header('Acces-Control-Allow-Origin', '*');
  res.header('Acces-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Acces-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  next();
});

const { AuthorsList, PostsList } = require('../classes');
const { author, post } = require('../actions');

const startServer = () => {
  return new Promise((resolve, reject) => {
    app.listen(port, (err) => {
      if (err) reject('Server could not start');
      console.log("Starting the server...");
      console.log(`Server started running on http://localhost:${port}...`);
      resolve();    
    })
  })
}

// app.use(fileUpload({
//   createParentPath: true
// }));

const authorList = new AuthorsList('authors.json');
const postList = new PostsList('posts.json');

app.get('/blog/', (req, res) =>  {
  post.getPosts(postList, req, res);
});

app.get('/blog/:id', (req, res) =>  {
  post.getPostById(postList, req, res);
});

app.post('/blog/create', (req, res) =>  {
  post.addPost(postList, req, res);
});

app.put('/blog/:id', (req, res) =>  {
  post.updatePost(postList, req, res);
});

app.delete('/blog/:id', (req, res) =>  {
  post.deletePost(postList, req, res);
});

app.get('/author/', (req, res) =>  {
  author.getAuthors(authorList, req, res);
});

app.get('/author/:id', (req, res) =>  {
  author.getAuthorById(authorList, req, res);
});

app.post('/author/create', (req, res) =>  {
  author.addAuthor(authorList, req, res);
});

app.put('/author/:id', (req, res) =>  {
  author.updateAuthor(authorList, req, res);
});

app.delete('/author/:id', (req, res) =>  {
  author.deleteAuthor(authorList, req, res);
});

module.exports = { startServer };