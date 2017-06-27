const express = require('express')

const Artists = require("../models/artists.js")

const artistRouter = express.Router()

artistRouter.get("/new", (req, res) => {
    res.render("artists/new")
}).post("/new", (req, res)=> {
    const newArtists = new Artists ({
        artistName: req.body.artistName,
        imageUrl: req.body.imageUrl,
        description: req.body.description
    })
    newArtists.save()
    res.redirect("/")
})


artistRouter.get("/:id", (req, res)=> {
    Artists.findById(req.params.id, (err, artists)=> {
        console.log("body: ", artists)
        res.render("artists/single", {artists: artists})
    })
}).post("/:id", (req, res)=>{
    Artists.findById(req.params.id, (err, artists)=>{
        artists.comments.push(req.body)
        artists.save()
        res.render("artists/single", {artists: artists})
    })
})

module.exports = artistRouter