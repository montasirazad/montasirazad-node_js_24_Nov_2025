const handle = (req, res) => {
  console.log(req.app.locals.title);
  res.send("This is from handle local function");
};

module.exports = handle;
