const upload = require("../utils/upload");
const {
  createBlogPost,
  getAllBlog,
  getBlogDetails,
  deleteBlog,
  updateBlog,
} = require("../controllers/blog.controller");
const express = require("express");
const router = express.Router();

const routes = () => {
  router.post("/", upload.single("coverImage"), createBlogPost);
  router.get("/", getAllBlog);
  router.post("/:id", getAllBlog);
  router.delete("/:id", deleteBlog);
  router.put("/:id", updateBlog);
  return router;
};

module.exports = routes;
