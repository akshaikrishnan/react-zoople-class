const express = require("express");
const router = express.Router();

const categoryRoutes = require("./category.routes");
const blogRoutes = require("./blog.routes");

router.use("/category", categoryRoutes());
router.use("/blog", blogRoutes());

module.exports = router;
