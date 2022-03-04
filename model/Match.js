const mongoose = require("mongoose");
const rel=  mongoose.Schema.Types.ObjectId 

const Schema = new mongoose.Schema(
  {
    home: String,
    away: String, 
    match_date: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Match", Schema);
