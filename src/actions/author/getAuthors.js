const getAuthor = async (authors, req, res) => {
  try {
    const authorsList = await authors.get();
    res.status(200);
    res.json(authorsList);
    res.end();
  } catch({message}) {
    res.status(500);
    res.json({error: message});
  }
}

module.exports = getAuthor;