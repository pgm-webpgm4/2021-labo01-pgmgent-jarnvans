const deleteAuthor = async (authors, req, res) => {
  try {
    const { id } = req.params;
    const deletedAuthor = await authors.delete(id);
    res.status(200);
    res.json({deletedAuthor});
  } catch({message}) {
    res.status(500);
    res.json({error: message});
  }
}

module.exports = deleteAuthor;