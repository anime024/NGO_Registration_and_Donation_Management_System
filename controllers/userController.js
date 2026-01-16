const User = require("../models/user");
const { getUser } = require("../services/auth");

const { setUser } = require("../services/auth");

async function handlelogin(req, res) {
  const { email, password } = req.body;
  const result = await User.matchPassword(email, password);

  if (!result.success) {
    return res.redirect(`/login?error=${encodeURIComponent(result.message)}`);
  }

  console.log("USER MATCHED FOUND ", result.user);
  const token = setUser(result.user);
  res.cookie("token", token);

  if (result.user.role === "admin") {
    return res.redirect("/admin/dashboard");
  }

 return res.redirect("loginsuccess");
}

async function handlesignUp(req, res) {
  const { fullName, email, password } = req.body;
  const user = await User.create({
    name: fullName,
    email: email,
    password: password,
  });
  console.log(`USER IS ADDED IN MONGOOSE AND USER IS ${user}`);
  console.log("FROM SIGNUP ", req);
  res.redirect("/");
}

async function handledashBoard(req, res) {
  const authorizationToken = req.cookies.token;
  const user = getUser(authorizationToken);
  const userProfile = await User.findOne({
    email: user.email,
  });
  res.render("dashBoard", { userProfile });
}
function handleloginSuccess(req, res) {
  res.redirect("/");
}

function handleConnectionBetweenUserAndPaymentPage(req, res) {
  res.render("paymentPage");
}

function handleLogout(req, res) {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
  });

  return res.redirect("/login");
}

module.exports = {
  handlelogin,
  handlesignUp,
  handledashBoard,
  handleloginSuccess,
  handleConnectionBetweenUserAndPaymentPage,
  handleLogout,
};
