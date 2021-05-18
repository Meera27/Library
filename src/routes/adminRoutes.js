const express = require("express");
const adminRouter = express.Router();
const Bookdata = require("../model/bookdata");

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
  adminRouter.get("/", function (req, res) {
    res.render("addbooks", {
      nav,
      title: "Add Book",
    });
  });

  adminRouter.post("/add",upload.single('image'), function (req, res) {
    var item = {
      title: req.body.title,
      genre: req.body.genre,
      author: req.body.author,
      image: req.file.filename,
      desc: req.body.desc,
    };
    var book = Bookdata(item);
    book.save();
    res.redirect("/books");
  });

  adminRouter.get("/updatebook/:id", function (req, res) {
    const id = req.params.id;
    Bookdata.findOne({ _id: id }).then(function (book) {
      res.render("updatebook", {
        nav,
        title: "Library",
        book,
      });
    });
  });

  adminRouter.post("/updatebook/:id",upload.single('image'), function (req, res) {
    const id = req.params.id;
    var item = {
      title: req.body.title,
      genre: req.body.genre,
      author: req.body.author,
      image: req.file.filename,
      desc: req.body.desc,
    };

    console.log(id);
    Bookdata.findOneAndUpdate({ _id: id }, item, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully Updated");
        res.redirect("/books");
      }
    });
  });
  adminRouter.get("/deletebook/:id", function (req, res) {
    const id = req.params.id;
    Bookdata.deleteOne({ _id: id }, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Deletion Complete!!!");
        res.redirect("/books");
      }
    });
  });

  return adminRouter;
}
module.exports = router;
