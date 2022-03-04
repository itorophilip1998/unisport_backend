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
  index,
} = require("../controllers/UserController");
const { authenticateToken } = require("../middleware/auth");
const route = express.Router();

route // Auth Group
  .get("/", index) //signup
  .post("/signup", signup) //signup
  .post("/signin", signin) //signin
  .delete("/signout", authenticateToken, signout) //admin-only
  .get("/me", authenticateToken, me); //admin-only

route //  Games/match Group
  .post("/register", register) //any body
  .post("/set-match", authenticateToken, setMatch) //set match admin only
  .get("/view-match", viewMatch);

module.exports = route;
