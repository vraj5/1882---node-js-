const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const routes = require("./routes/v1");
const { connectDB } = require("./db/dbConnection");
const config = require("./config/config")

const app = express();

app.use(bodyParser.urlencoded({extendedP:false}));

app.use(bodyParser.json());

app.use("/v1",routes);

/** whenever route not created and you try to use that route then throw error. */
app.use((req,res,next)=>{
    next(new Error("Route not found!"));
});

/** Database Connection */
connectDB();


/** Connect Server using HTTP Server */
const server = http.createServer(app);

server.listen(config.port, ()=>{
    console.log("Server Listening Port Number 3000!");
});