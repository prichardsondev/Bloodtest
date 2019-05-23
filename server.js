const mongoose = require("mongoose");
const express = require("express");
const app = express();

require("./middleware/startup")(app);
require("./routes/startup")(app);
require("./database/db")();

let port = process.env.PORT || 80;
const server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
