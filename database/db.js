const mongoose = require("mongoose");
const config = require("config");

//local
//let connectionString = config.get("server.connectionstring");
//mlab (mongo atlas)
//let connectionString = "mongodb://user:user123@ds157956.mlab.com:57956/idexxnode";
let connectionString = "mongodb+srv://user:user123@cluster0-ukyug.mongodb.net/idexxnode?retryWrites=true";


module.exports = function () {
  mongoose
    .set("useFindAndModify", false)
    .connect(connectionString, { useNewUrlParser: true })
    .then(() => console.log("Connected to Mongo localhost..."))
    .catch(err => console.error("Could not connect", err));

  process.on('SIGINT', function () {
    mongoose.disconnect(function () {
      console.log("Mongoose default connection is disconnected...");
      process.exit(0)
    });
  });
};
