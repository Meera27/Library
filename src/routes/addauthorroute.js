const express = require("express");
const addauthorsRouter = express.Router();

const AuthorData = require("../model/authordata");
function router(nav) {
  addauthorsRouter.get("/", function (req, res) {
    res.render("addauthors", {
      nav,
      title: "Add Author",
    });
  });
  addauthorsRouter.post("/add", function (req, res) {
    var item = {
      name: req.body.name,
      title: req.body.title,
      image: req.body.image,
      desc: req.body.desc,
    };
    var authors = AuthorData(item);
    authors.save();
    res.redirect("/authors");
  });
  addauthorsRouter.get("/updateauthor/:id", function (req, res) {
    const id = req.params.id;
    AuthorData.findOne({ _id: id }).then(function (author) {
      res.render("updateauthor", {
        nav,
        title: "Library",
        author,
      });
    });
  });

  addauthorsRouter.post("/updateauthor/:id", function (req, res) {
    const id = req.params.id;
    var item = {
      name: req.body.name,
      title: req.body.title,
      image: req.body.image,
      desc: req.body.desc,
    };
    console.log(id);
    AuthorData.findOneAndUpdate({ _id: id }, item, (err, doc) => {
      if (err) {
      } else {
        console.log("Successfully Updated!!!");
        res.redirect("/authors");
      }
    });
  });
  addauthorsRouter.get("/deleteauthor/:id", function (req, res) {
    const id = req.params.id;
    AuthorData.remove({ _id: id }, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Deletion Complete!!!");
        res.redirect("/authors");
      }
    });
  });

  return addauthorsRouter;
}
module.exports = router;
