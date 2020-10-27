const getpostById = async (posts, req, res) => {
  try {
    const { id } = req.params;
    const post = await posts.getById(id);
    res.status(200);
    res.json(post);
  } catch({message}) {
    res.status(500);
    res.json({error: message});
  }
}

module.exports = getpostById;