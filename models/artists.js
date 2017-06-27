const mongoose = require("mongoose")
const Schema = mongoose.Schema

const artistsSchema = new Schema ({
    artistName: String,
    imageUrl: String,
    description: String,
    comments: Array    
})

const Artists = mongoose.model("Artists", artistsSchema)

module.exports = Artists