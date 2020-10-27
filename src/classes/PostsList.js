const fs = require('fs');
const List = require('./List');
const Post = require('./Post');

class PostsList extends List {
  constructor(file) {
    super(file);
  }

  async add(title, intro, description, author) {
    const posts = await this.get();
    const post = new Post(title, intro, description, author);

    posts.push(post);
    await this.save(posts);

    return post;
  }

  async getById(id) {
    const posts = await this.get();
    const post = posts.find(post => post.id === id);

    if (post === null) {
      throw new Error(`post with ID ${id} doesn't exist`);
    }

    return post;
  }

  async update(id, title, intro, description, author) {
    const posts = await this.get();
    const post = posts.find(post => post.id === id);

    if (post === null) {
      throw new Error(`post with ID ${id} doesn't exist`);
    }
    
    post.title = title;
    post.intro = intro;
    post.description = description;
    post.author = author;

    await this.save(posts);

    return post;
  }

  async delete(id) {
    const post = await this.getById(id);
    const posts = await this.get();
    const remainingPosts = posts.filter(post => post.id !== id);

    await this.save(remainingPosts);

    return post;
  }

  get () {
    return new Promise((resolve, reject) => {
      fs.readFile(this.filepath, 'utf8', (err, data) => {
        if (err) reject(err);
        const postsData = JSON.parse(data);
        const posts = postsData.map((item) => Object.assign(new Post, item));
        resolve(posts);
      })
    })
  }
}

module.exports = PostsList;