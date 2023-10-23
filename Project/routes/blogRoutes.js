const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

//Get Blogs
//We ll be moving the controllers into a seperate section , so this is the old version
// router.get("/", (req, res) => {

//   Blog.find()
//     .sort({ createdAt: -1 })
//     .then((result) => {
//       res.render("index", { title: "All blogs", blogs: result });
//     })
//     .catch((error) => {
//       console.log("error");
//     });
// });

router.get("/", blogController.blog_index);
//Post blogs
router.post("/", blogController.blog_create_post);
//Get page for creating blogs
router.get("/create", blogController.blog_create_get);
//Blog get by id
router.get("/:id", blogController.blog_details);
//Delete blog
router.delete("/:id", blogController.blog_delete);

module.exports = router;
