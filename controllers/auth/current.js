const current = async (req, res) => {
    const { username } = req;

    res.json({ username });
  };
  
  module.exports = current;