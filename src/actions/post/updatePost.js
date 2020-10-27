const updateAuthor = async (posts, req, res) => {
  try {
    const { id } = req.params;
    const { title, intro, description, author } = req.body;
    const updatedAuthor = await await posts.update(id, title, intro, description, author);
    res.status(200);
    res.json({author: updatedAuthor});
  } catch({message}) {
    res.status(500);
    res.json({error: message});
  }
}

module.exports = updateAuthor;