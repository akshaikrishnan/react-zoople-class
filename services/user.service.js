const User = require("../model/user.model");

async function getUsers() {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function createUser(name, email) {
  try {
    const user = await User.create({ name, email });
    await user.save();
    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = { getUsers, createUser };
