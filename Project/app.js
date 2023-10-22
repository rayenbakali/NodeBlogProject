const express = require("express");

//express app
const app = express();
//register view engines
app.set("view engine", "ejs");

//selected prefered view folder
// app.set("views", "myviews");

//app listen
app.listen(3000, () => {
  console.log("running on 3000");
});

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  //res.send("<h1>salem</h1>");
  // res.sendFile("./views/index.html", { root: __dirname });
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  // res.send("<h1>About us page</h1>");
  res.render("about", { title: "About section" });
});

//redirection
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "New Blog Section" });
});

//404 not found , it needs to be at the end because if you check a route that exists below it ,it will lunch this first
app.use((req, res) => {
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});
