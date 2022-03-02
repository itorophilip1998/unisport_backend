const Joi = require("joi");
const match = require("nodemon/lib/monitor/match");
const { generateAccessToken, auth, logout } = require("../middleware/auth");
const Game = require("../model/Game"); 

const validator = async (data) => {
  try {
    const schema = Joi.object({ 
      school_name: Joi.string().required(),
      state: Joi.string().required(),
      year: Joi.date().required(),
      game_master: Joi.string().required(),
      game_master_email: Joi.string().required(),
      game_master_phone: Joi.string().required(),
    });
    const { repeat_password, ...newData } = await schema.validateAsync(data, {
      abortEarly: false,
    });
    return newData;
  } catch (error) {
      throw error;
    // const errors = [];
    // if (error.isJoi) {
    //   for (let item of error.details) {
    //     errors.push({ field: item.path[0], err: item.message });
    //   }
    //   res.send({ errors });
    }
  
};

exports.register = async (req, res) => {
  const newData = await validator(req.body);
  await Game.create(newData)
    .then((result) => { 
      res.json({ result, status: true });
    })
    .catch((err) => {
       res.send(err)
    });
};

exports.setMatch = (req, res) => {
  res.send("Tested");
}; 
exports.viewMatch = async (req, res) => {
    const data = await Game.find({});
  res.send(data);
}; 
