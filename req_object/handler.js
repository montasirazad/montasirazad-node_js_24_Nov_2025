const handler = (req, res) => {
  console.log(req.app.get('view engine'));
  res.send(`This is homepage running on port 3000`);
};

module.exports = handler;
