const getHomePage = (req, res) => {
  res.send("Hello World!");
};

const getABC = (req, res) => {
  res.send("Hello vannt!");
};

const getAboutPage = (req, res) => {
  res.render("about.ejs");
};

module.exports = { getHomePage, getABC, getAboutPage };
