const express = require("express");
const UserData = require("../model/userdata");
const loginRouter = express.Router();

function router(nav) {
  loginRouter.get("/", function (req, res) {
    res.render("login", {
      errormessage: "",
      nav,
      title: "Login",
    });
  });
  loginRouter.post("/valid", function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    UserData.findOne(
      { email: email, password: password },
      function (err, user) {
        if(user) {
          res.redirect("/home");
        } else {
          if (!user) {
            res.render("login", {
              errormessage: "Invalid Login!!!",
              nav,
              title: "Login",
            });
          } else {
            console.log(err);
          }
        }
      }
    );
  });
  return loginRouter;
}

module.exports = router;
