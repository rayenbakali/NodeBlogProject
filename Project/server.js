const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  //set header content type
  res.setHeader("Content-Type", "text/html");
  //   res.write("<head> <link rel='stylesheet' href='#'> </head>");
  //   res.write("<h1>Hello Baka</h1>");
  //   res.write("<p>Hello </p>");
  //   res.end();

  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    //making a redirection
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "./about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }
  //send html file
  //   fs.readFile("./views/index.html", (err, data) => {

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //since we're returning a single element we don't need to use write multiple times , we can impliment it in data
      //   res.write(data);
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening to requests");
});
