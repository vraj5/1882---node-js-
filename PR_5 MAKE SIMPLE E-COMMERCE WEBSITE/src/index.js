const http = require ("http");
const express = require("express");
const config = require("./config/config");
const { connectDB } = require("./db/dbConnection");
const routes = require("./routes/v1");
const bodyParser = require("body-parser");

app = express();

/**
 * allow form-data from body
 * form-data is use for image upload
 * parse application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * allow json data from body
 * parse application/json
 */
app.use(bodyParser.json());




/** Database connection */
connectDB()

/** creating namespace for routes */
app.use("/v1", routes);



// === Create server using express === 
app.listen(8080 , () =>{
    console.log("Server is running..");
});


// === Create server using http === 
// const server = http.createServer(app);
// server.listen(config.port, () => {
//   console.log("server listning on 8080 port number");
// });

