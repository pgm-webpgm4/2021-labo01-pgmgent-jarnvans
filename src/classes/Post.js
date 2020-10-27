const { v4: uuidv4 } = require('uuid');

class Post {
  constructor (title, intro, description, author) {
    this.id = uuidv4();
    this.title = title;
    this.intro = intro;
    this.description = description;
    this.author = author;
    this.publishedOn = Date.now();
    this. fullUrl = `http://localhost:8080/blog/${this.id}`;
  }
}

module.exports = Post;