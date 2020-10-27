const { v4: uuidv4 } = require('uuid');

class Author {
  constructor (name, profilePic) {
    this.id = uuidv4();
    this.name = name;
    this.profilePic = profilePic;
  }
}

module.exports = Author;