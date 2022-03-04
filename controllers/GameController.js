const Joi = require("joi");
const Game = require("../model/Game");
const Match = require("../model/Match");

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
    // throw error;
  }
};

exports.register = async (req, res) => {
  try {
    const newData = await validator(req.body);
    await Game.create(newData)
      .then((result) => {
        res.json({ result, status: true });
      })
      .catch((err) => {
        res.send(err);
      });
  } catch (error) {}
};

exports.setMatch = async (req, res) => {
  try {
    const schema = Joi.object({
      away: Joi.string().required(),
      home: Joi.string().required(),
    });
    await schema.validateAsync(req.body, {
      abortEarly: false,
    });

    await Match.create(req.body)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  } catch (error) {
    console.log(error);
  }
};
exports.viewMatch = async (req, res) => {
  try {
    const games = await Game.find({});
    const match = await Match.find({});
    res.json({ match, games });
  } catch (error) {}
};
