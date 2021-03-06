const port = 3000,
    http = require("http"),
    httpStatusCodes = require("http-status-codes"),
    router = require("./router"),
    fs = require("fs"),
    plainTextContentType = {
        "Content-Type": "text/html"
    },
    htmlContentType = {
        "Content-Type": "text/html"
    },
    customReadFile = (files, res) => {
        fs.readFile(`./${file}`, (errors, data) => {
            if (errors) {
                console.log("Error reading the file");
            }
            res,end(data);
        });
    };
    router.get("/", (req, res) => {                            
        res.writeHead(httpStatusCodes.OK, plainTextContentType);
        res.end("INDEX");
      });
      router.get("/index.html", (req, res) => {
        res.writeHead(httpStatusCodes.OK, htmlContentType);
        customReadFile("Views/index.html", res);
      });
      
      router.post("/", (req, res) => {
        res.writeHead(httpStatusCodes.OK, plainTextContentType);
        res.end("POSTED");
      });
      
      http.createServer(router.handle).listen();             
      console.log(`The server is listening on port number:${port}`);
