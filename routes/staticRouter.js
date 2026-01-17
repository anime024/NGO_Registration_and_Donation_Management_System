const express = require("express");

const staticRouter = express.Router();
function renderLogin(req, res) {
  res.render("login", {
    error: req.query.error || null,
  });
}

staticRouter.get("/", (req, res) => {
  res.render("homePage");
});

staticRouter.get("/login", renderLogin);

staticRouter.get("/signUp", (req, res, next) => {
  res.render("signUp",{error:null});
});

module.exports = staticRouter;
