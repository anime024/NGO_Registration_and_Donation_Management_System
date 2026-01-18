const { getUser } = require("../services/auth");

function attachUser(req, res, next) {
  const token = req.cookies.token;
  if (token) {
    const user = getUser(token);
    if (user) {
      req.user = user;
    }
  }
  next();
}

function checkForAuhentication(req, res, next) {
  const authorizationToken = req.cookies.token;
  if (!authorizationToken) {
    console.log("No Authorization token");
    return res.redirect("/login");
  }
  const user = getUser(authorizationToken);
  if (!user) {
    console.log("No User Found");
    return res.redirect("/login");
  }
  req.user = user;
  next();
}

// function restrictTo(roles = []) {
//   return function (req, res, next) {
//     if (!req.users) {
//       return res.redirect("/login");
//     }

//     if (!roles.includes(req.user.role)) return res.end("UnAuthorized");

//     return next();
//   };
// }

function requireadmin(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).send("Access denied");
  }
  next();
}

module.exports = {
  checkForAuhentication,
  attachUser,
  // restrictTo,
  requireadmin,
};
