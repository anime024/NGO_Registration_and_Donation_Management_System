const User = require("../models/user");
const { getUser } = require("../services/auth");

const { setUser } = require("../services/auth");

async function handlelogin(req, res) {
  const { email, password } = req.body;
  const result = await User.matchPassword(email, password);

  if (!result.success) {
    return res.redirect(`/login?error=${encodeURIComponent(result.message)}`);
  }

  const token = setUser(result.user);
  res.cookie("token", token);

  if (result.user.role === "admin") {
    return res.redirect("/admin/dashboard");
  }

  return res.redirect("loginsuccess");
}

async function handlesignUp(req, res) {
  try{
    const { fullName, email, password } = req.body;
  const user = await User.create({
    name: fullName,
    email: email,
    password: password,
  });

  res.redirect("/");
}catch (error) {

    //  Duplicate email error
    if (error.code === 11000) {
      return res.status(409).render("signup", {
        error: "Email already exists. Please login or use another email."
      });
    }

    // Other errors
    console.error(error);
    return res.status(500).render("signup", {
      error: "Something went wrong. Please try again."
    });
  }
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
