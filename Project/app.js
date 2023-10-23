const exp = require("constants");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const mongoose = require("mongoose");
const { result } = require("lodash");
const { error } = require("console");
const { resourceUsage } = require("process");
const blogRoutes = require("./routes/blogRoutes");
//express app
const app = express();

//call mongo
const URI = "mongodb://127.0.0.1:27017/nodetut";
mongoose
  .connect(URI)
  .then((result) => {
    console.log("db connected");
    app.listen(3000, () => {
      console.log("server running on 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });

//register view engines
app.set("view engine", "ejs");

//selected prefered view folder
// app.set("views", "myviews");

//app listen
// app.listen(3000, () => {
//   console.log("running on 3000");
// });

//middleware & static files
app.use(express.static("public"));

//middleware for forms
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//mongoose and mongo sandbox routes

// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new blog2",
//     snippet: "about new blog",
//     body: "more about new blog",
//   });
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((error) => {
//       console.log("error");
//     });
// });

// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((error) => {
//       console.log("error");
//     });
// });

// app.get("/findblog", (req, res) => {
//   Blog.findById("6535d2143bad017ad7952693")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((error) => {
//       console.log("error");
//     });
// });

//Middleware creation : reads from top to bottom : alternative express.Morgan

// app.use((req, res, next) => {
//   console.log("new request");
//   console.log("host:", req.hostname);
//   console.log("host:", req.path);
//   console.log("method:", req.method);
//   //fire the next function
//   next();
// });

//routes
app.get("/", (req, res) => {
  // const blogs = [
  //   {
  //     title: "Yoshi finds eggs",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "Mario finds stars",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "How to defeat bowser",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  // ];
  // //res.send("<h1>salem</h1>");
  // // res.sendFile("./views/index.html", { root: __dirname });
  // res.render("index", { title: "Home", blogs });
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  // res.send("<h1>About us page</h1>");
  res.render("about", { title: "About section" });
});

//redirection
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//We transfered blog routes to another file
app.use("/blogs", blogRoutes);

//404 not found , it needs to be at the end because if you check a route that exists below it ,it will lunch this first
app.use((req, res) => {
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});
