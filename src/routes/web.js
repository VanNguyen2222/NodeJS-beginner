const express = require("express");
const {
  getHomePage,
  getABC,
  getAboutPage,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);

router.get("/abc", getABC);

router.get("/about", getAboutPage);

module.exports = router;
