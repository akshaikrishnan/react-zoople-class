const express = require("express");
const app = express();
const db = require("./utils/db");
const port = process.env.PORT || 5000;
const routes = require("./routes");
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
