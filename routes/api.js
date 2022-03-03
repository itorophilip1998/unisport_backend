const express = require("express");
const {
  register,
  setMatch,
  viewMatch,
} = require("../controllers/GameController");
const {
  signin,
  signup,
  signout,
  me,
} = require("../controllers/UserController");
const { authenticateToken } = require("../middleware/auth");
const route = express.Router();

route // Auth Group
  .get("/", (req, res) => res.send("Hello API!")) //signup
  .post("/signup", signup) //signup
  .post("/signin", signin) //signin
  .delete("/signout", authenticateToken, signout) //signout
  .get("/me", authenticateToken, me); //user

route //  Games Group
  .post("/register", register) //any body
  .post("/set-match", authenticateToken, setMatch) //only admin
  .get("/view-match", viewMatch); //only admin

module.exports = route;
