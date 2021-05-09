const express = require("express");
const app = new express();
const port = process.env.PORT || 2000;

const nav = [
  {
    link: "/login",
    name: "Login",
  },
  {
    link: "/signup",
    name: "Signup",
  },
  {
    link: "/books",
    name: "Books",
  },
  {
    link: "/authors",
    name: "Authors",
  },
  {
    link: "/addauthor",
    name: "Add Author",
  },
  {
    link: "/admin",
    name: "Add Book",
  },
  {
    link: "/home",
    name: "",
  },
];

const booksRouter = require("./src/routes/bookroutes")(nav);
const authorsRouter = require("./src/routes/authorroutes")(nav);
const loginRouter = require("./src/routes/loginroutes")(nav);
const signupRouter = require("./src/routes/signuproutes")(nav);
const addauthorsRouter = require("./src/routes/addauthorroute")(nav);
const adminRouter = require("./src/routes/adminRoutes")(nav);

app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"));

app.set("view engine", "ejs");
app.set("views", __dirname + "/src/views");

app.use("/books", booksRouter);
app.use("/authors", authorsRouter);
app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/addauthor", addauthorsRouter);
app.use("/admin", adminRouter);


app.get("/", function (req, res) {
  res.render("index", { nav, title: "Welcome" });
});
app.get("/home", function (req, res) {
  res.render("home", { nav, title: "Library" });
});
app.listen(port, function () {
  console.log("Ready at " + port);
});
