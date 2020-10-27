const addPost = async (posts, req, res) => {
  try {
    const { title, intro, description, author } = req.body;
    console.log(req.body);
    const newPost = await posts.add(title, intro, description, author);
    res.status(201);
    res.json({post: newPost});
    res.redirect('/blog');
  } catch({message}) {
    res.status(500);
    res.json({error: message});
  }
}

module.exports = addPost;