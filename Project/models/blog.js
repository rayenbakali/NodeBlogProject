const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
//Name in model is important , it will pluralise it and look for it in mongo collection (blogS)
const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
