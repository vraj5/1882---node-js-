const express = require("express")
const bodyParser = require("body-parser")
const Joi = require("joi")
const cors = require("cors")
const http = require("http")
const {connectDB} = require("./db/dbConnection")
const routes = require("./routes/v1")
const config = require("./config/config")

const app = express();


// Add Namespace in route
app.use("/v1", routes);

// When route not created and you try to use that route and throw error
app.use((req,res,next)=>{
    next(new Error("Route not Found!"));
});

// Database Connection
connectDB()

// Create Server using HTTP
const server = http.createServer(app)

server.listen(config.port, ()=>{
    console.log("Server listning on port number 3000!");
})