const getPosts = async (posts, req, res) => {
  try {
    const postsList = await posts.get();
    res.status(200);
    res.json(postsList);
    res.end();
  } catch({message}) {
    res.status(500);
    res.json({error: message});
  }
}

module.exports = getPosts;