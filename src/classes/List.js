const fs = require('fs');

class List {
  constructor (file) {
    this.filepath = `src/data/${file}`;
    this.init();
  }

  init () {
    if (!fs.existsSync(this.filepath)) {
      fs.writeFileSync(this.filepath, '[]');
    }
  }

  save(content) {
    return new Promise((resolve, reject) => {
      fs.writeFile(this.filepath, JSON.stringify(content), (err) => {
        if (err) reject(err);
        resolve();
      })
    })
  }
}

module.exports = List;