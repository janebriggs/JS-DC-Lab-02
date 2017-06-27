//Require dependencies
const express = require("express")
const bodyParser = require("body-parser")
const hbs = require("express-handlebars")
const mongoose = require("mongoose")

mongoose.connect("mongodb://janewheatley:mongoJane!@poked-shard-00-00-puk5q.mongodb.net:27017,poked-shard-00-01-puk5q.mongodb.net:27017,poked-shard-00-02-puk5q.mongodb.net:27017/<poked>?ssl=true&replicaSet=poked-shard-0&authSource=admin")


//Create the exprses app
const app = express()


//Require the models
const Artists = require("./models/artists")


//Require the Controllers/Routers
const indexController = require("./routes/index.js")
const artistController = require("./routes/artists.js")


//Register and Use Handlebars
app.engine("handlebars", hbs({ defaultLayout: "main"}))
app.set("view engine", "handlebars")


// Serving static files (like css)
app.use(express.static('public'))


//Use Body Parser
app.use(bodyParser.urlencoded({extended:true}))


//App Routes
app.use("/artists", artistController)
//this builds the page url path
app.use("/", indexController)


//Listen
app.listen(3000, function(){
    console.log("listening")
})