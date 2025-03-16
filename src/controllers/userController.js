const userSchema = require("../models/UserSchema");

const createUser = async (req, res) => {
  const { name, age } = req.body;
  try {
    const create = await userSchema.create({
      name,
      age,
    });
    res.status(200).send(create);
  } catch (error) {
    console.log(error);
  }
};
const getUser = async (req, res) => {
  try {
    const alluser = await userSchema.find();
    res.status(200).send(alluser);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
  getUser,
};
