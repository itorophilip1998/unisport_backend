const express = require("express");
require("./config/database")();
const web = require("./routes/web");
// const api = require("./routes/api");
const channel = require("./routes/channel");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 8000;
 
// use
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public")); 
app.use(cors());

// routes
app.use("/", web);
// app.use("/api", api);
app.use("/channel", channel);

// Express Error Handling
app.get("*", (req, res, next) => {
  res.send("Page Not Found!");
  next();
});

// Port
app.listen(port, () => {
  console.log(`App is running @ ${port}`);
});
