const joi = require("joi");
const dotenv = require("dotenv");

dotenv.config();

const { value: envVars, error} = envVarsSchema
.prefs({errors: {label:"key"}})
.validate(process.env);

if(error){
    console.log("config error: ",error);
}
module.exports = {
    port : envVars.PORT,
    mongodb: {
        url: envVars.MONGODB_URL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
}