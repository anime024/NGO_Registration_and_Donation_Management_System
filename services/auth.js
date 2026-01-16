require("dotenv").config({ path: "../.env" });
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;
function setUser(user) {
  return jwt.sign(
    {
      name: user.name,
      email: user.email,
      role: user.role,
    },
    secret,
  );
}

function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
}

module.exports = { setUser, getUser };
