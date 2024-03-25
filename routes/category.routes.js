const {
  create,
  getAll,
  removeCategory,
} = require("../controllers/category.controller");
const express = require("express");
const router = express.Router();

const routes = () => {
  router.post("/", create);
  router.get("/", getAll);
  router.delete("/:id", removeCategory);
  return router;
};

module.exports = routes;
