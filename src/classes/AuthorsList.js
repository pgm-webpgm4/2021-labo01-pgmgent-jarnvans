const fs = require('fs');
const List = require('./List');
const Author = require('./Author');

class AuthorsList extends List {
  constructor(file) {
    super(file);
  }

  async add(name, profilePic) {
    const authors = await this.get();
    const author = new Author(name, profilePic);

    authors.push(author);
    await this.save(authors);

    return author;
  }

  async getById(id) {
    const authors = await this.get();
    const author = authors.find(author => author.id === id);

    if (author === null) {
      throw new Error(`Author with ID ${id} doesn't exist`);
    }

    return author;
  }

  async update(id, name, profilePic) {
    const authors = await this.get();
    const author = authors.find(author => author.id === id);

    if (author === null) {
      throw new Error(`Author with ID ${id} doesn't exist`);
    }
    author.name = name;
    author.profilePic = profilePic;

    await this.save(authors);

    return author;
  }

  async delete(id) {
    const author = this.getById(id);
    const authors = await this.get();
    const remainingAuthors = authors.filter(author => author.id !== id);

    await this.save(remainingAuthors);

    return author;
  }

  get () {
    return new Promise((resolve, reject) => {
      fs.readFile(this.filepath, 'utf8', (err, data) => {
        if (err) reject(err);
        const dataAuthors = JSON.parse(data);
        const authors = dataAuthors.map((item) => Object.assign(new Author, item));
        resolve(authors);
      })
    })
  }
}

module.exports = AuthorsList;