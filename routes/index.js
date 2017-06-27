const express = require('express')

const Artists = require('../models/artists.js')

const appRouter = express.Router()

appRouter.get('/', ( req , res ) => {
  // index route
  // list every article
  Artists.find({}, ( err, data ) => {

    res.render('index', { artists: data })
    //artists here refers to #each artists

  })

})

module.exports = appRouter