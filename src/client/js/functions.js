const api = {
  async getAllPosts () {
    const res = await fetch('http://localhost:5050/blog/');
    const posts = await res.json();
    return posts;
  },
  async addAuthorInfoToPost(posts) {
    for (const post of posts) {
      const author = await this.findAuthor(post.author);
      post.author = author;
    }

    return posts;
  },
  async findAuthor(author) {
    const res = await fetch(`http://localhost:5050/author/${author}`);
    const foundAuthor = await res.json();
    return foundAuthor;
  },
  async getPost(id) {
    const res = await fetch(`http://localhost:5050/blog/${id}`);
    const post = await res.json();
    console.log(post);
    const author = await this.findAuthor(post.author);
    post.author = author;
    return post;
  },
  async getAuthors() {
    const res = await fetch(`http://localhost:5050/author/`);
    const authors = await res.json();
    return authors;
  }
}

export default api;