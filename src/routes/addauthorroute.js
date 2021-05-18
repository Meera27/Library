const express = require("express");
const addauthorsRouter = express.Router();
const AuthorData = require("../model/authordata");

const multer = require('multer');
const { request } = require("express");

const storage = multer.diskStorage({
//destination for files
    destination: function (req, file, callback) {
        callback(null, './public/images/uploads');
    },

//add back the extension
    filename: function (req, file, callback) {
        callback(null, Date.now() + file.originalname);
    },
});

//upload parameters for multer
const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 3,
    },
});




function router(nav) {
  addauthorsRouter.get("/", function (req, res) {
    res.render("addauthors", {
      nav,
      title: "Add Author",
    });
  });
  addauthorsRouter.post("/add",upload.single('image'),function (req, res) {
    console.log(req.file);
    var item = {
      name: req.body.name,
      title: req.body.title,
      image:req.file.filename,
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

  addauthorsRouter.post("/updateauthor/:id",upload.single('image'), function (req, res) {
    const id = req.params.id;
    var item = {
      name: req.body.name,
      title: req.body.title,
      image: req.file.filename,
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
    AuthorData.deleteOne({ _id: id }, function (err) {
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
