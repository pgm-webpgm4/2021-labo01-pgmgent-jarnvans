const addAuthor = async (authors, req, res) => {
  try {
    const { name, profilePic } = req.body;
    const newAuthor = await authors.add(name, profilePic);
    res.status(201);
    res.json({author: newAuthor});
  } catch({message}) {
    res.status(500);
    res.json({error: message});
  }
}

module.exports = addAuthor;