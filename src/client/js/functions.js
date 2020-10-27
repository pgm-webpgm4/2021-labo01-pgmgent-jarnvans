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
  },
  async createPost(post) {
    const jsonPost = JSON.stringify(post);
    console.log(jsonPost);
    const res = await fetch(`http://localhost:5050/blog/create`, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: post,
    });
    const author = await res.json();
  }
}

export default api;