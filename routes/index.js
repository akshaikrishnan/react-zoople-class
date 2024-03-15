const express = require("express");
const router = express.Router();

const userController = require("../controller/user.controller");

router.get("/", (req, res) => {
  const now = new Date();
  res.send(now);
});

router.get("/users", userController.getUsers);

router.post("/users", userController.createUser);

module.exports = router;
