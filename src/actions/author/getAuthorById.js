const getAuthorById = async (authors, req, res) => {
  try {
    const { id } = req.params;
    const author = await authors.getById(id);
    res.status(200);
    res.json(author);
  } catch({message}) {
    res.status(500);
    res.json({error: message});
  }
}

module.exports = getAuthorById;