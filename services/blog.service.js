const { Category, Blog } = require("../models/blog.model");

async function createBlog(data) {
  try {
    const blog = await Blog.create(data);
    // await blog.save();
    return blog;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getBlog() {
  try {
    const blog = await Blog.find();
    return blog;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function getBlogInfo(id) {
  try {
    const blog = await Blog.findById(id);
    return blog;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function removeBlog(id) {
  try {
    const blog = await Blog.findByIdAndDelete(id);
    return blog;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function updateBlogPost(id) {
  try {
    const blog = await Blog.findByIdAndupdate(id);
    return blog;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = { createBlog, getBlog, getBlogInfo };
