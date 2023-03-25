const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://silvansowino:Sunshine2day@cluster0.gn5kunu.mongodb.net/droprooms'

mongoose.connect(mongoURL, {useUnifiedTopology : true, useNewUrlParser : true})

var connection = mongoose.connection

connection.on('error', ()=>{
    console.log('Mongo DB connection failed')
})

connection.on('connected', ()=>{
    console.log('Mongo DB connection successful')
})

module.exports = mongoose