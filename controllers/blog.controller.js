const {
  createBlog,
  getBlog,
  getBlogInfo,
} = require("../services/blog.service");

const createBlogPost = async (req, res) => {
  try {
    console.log("file", req.body);

    const category = await createBlog({
      ...req.body,
      coverImage: req.file.path,
    });
    res.status(200).json(category);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getAllBlog = async (req, res) => {
  try {
    const blog = await getBlog();
    res.json(blog);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getBlogDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = getBlogInfo(id);
    res.json(blog);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const id = req.params.id;
    // const blog = getBlogDetails(id);
    // res.json(blog);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  createBlogPost,
  getAllBlog,
  getBlogDetails,
  deleteBlog,
  updateBlog,
};
