const Blog = require("../models/blog");

//get all blogs
const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("blogs/index", { title: "All blogs", blogs: result });
    })
    .catch((error) => {
      console.log("error");
    });
};

//blog details
const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("blogs/details", { blog: result, title: "Blog details" });
    })
    .catch((err) => {
      res.status(404).render("404", { title: "Blog not found" });
    });
};

//blog_create_post
const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      console.log("done");
      res.redirect("/");
    })
    .catch((error) => {
      console.log("error");
    });
};

//blog_create_get
const blog_create_get = (req, res) => {
  res.render("blogs/create", { title: "New Blog Section" });
};

//blog_delete
const blog_delete = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_post,
  blog_create_get,
  blog_delete,
};
