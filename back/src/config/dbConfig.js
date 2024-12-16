require("dotenv").config()

const mongoose = require("mongoose")

const dbConnection = async() => {

    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.zn28s.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTER}`)


}

module.exports = dbConnection;

