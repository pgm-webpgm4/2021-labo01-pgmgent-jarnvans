const deletepost = async (posts, req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await posts.delete(id);
    res.status(200);
    res.json({deletedPost});
  } catch({message}) {
    res.status(500);
    res.json({error: message});
  }
}

module.exports = deletepost;