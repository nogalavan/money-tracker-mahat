const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    // res.header(
    //   "Access-Control-Allow-Headers",
    //   "x-access-token, Origin, Content-Type, Accept"
    // );
    next();
  });

  app.use(authJwt.verifyToken);

  app.put("/api/users/addTransaction/:id", controller.addTransaction);
};