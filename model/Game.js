 const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    school_name: String,
    state: String,
    year: Date,
    game_master: String,
    game_master_email: String,
    game_master_phone: String 
  },
  {
    timestamps: true,
  }
);

 

module.exports = mongoose.model("Game", Schema);
