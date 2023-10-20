const fs = require("fs");

//read files
// fs.readFile("./docs/blog.Txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

//write files

// fs.writeFileSync("./docs/blog.txt", "salem", (err, data) => {
//   console.log("file was written");
// });

// fs.writeFileSync("./docs/blog2.txt", "salem2", (err, data) => {
//   console.log("file was written");
// });

//directories
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("created");
//   });
// } else {
//   fs.rmdir("./assets", (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("deleted ma king");
//   });
// }

//delete files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
