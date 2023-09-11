const express = require("express")
const port = 8080;
const app = express();

app.listen(port, console.log("Express Server is running Successfully..."))


// const http = require("http")
// const port2 = 8888;

// http.createServer((req,res)=>{

// }).listen(port2, console.log("http server created successfully...."))