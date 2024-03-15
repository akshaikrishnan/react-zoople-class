const userService = require("../services/user.service");

async function getUsers(req, res) {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

async function createUser(req, res) {
  try {
    const { name, email } = req.body;
    const user = await userService.createUser(name, email);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

module.exports = { getUsers, createUser };
