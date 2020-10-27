const updateAuthor = async (authors, req, res) => {
  try {
    const { id } = req.params;
    const { name, profilePic } = req.body;
    const updatedAuthor = await authors.update(id, name, profilePic);
    res.status(200);
    res.json({author: updatedAuthor});
  } catch({message}) {
    res.status(500);
    res.json({error: message});
  }
}

module.exports = updateAuthor;