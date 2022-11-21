var express = require('express');
var router = express.Router();
var Video = require('../models/videos.js');

/* GET ALL VIDEOS */
router.get('/', function(req, res, next) {
  res.json(
    [
      {
        title: "video 1",
        description: "this is video 1"
      },
      {
        title: "video 2",
        description: "this is video 2"
      },
      {
        title: "video 3",
        description: "this is video 3"
      },
      
    ]
    
    );
});


module.exports = router;