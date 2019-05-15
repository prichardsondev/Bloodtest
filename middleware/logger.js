module.exports.log = (req, res, next) => {
  //do logging stuff here
  console.log("Custom Middleware Logger...");
  next();
};
