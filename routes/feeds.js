const express = require('express');
const router = express.Router();
var multer = require('multer')
const Feeds = require('../models/feeds');

// multer configuration
var storage = multer.diskStorage({
    destination: './public/uploads',
    filename: function (req, file, cb) {
        const ext = file.mimetype.split('/')[1];
        cb(null, 'photo-' + Date.now() + '.' + ext);
    }
})

var upload = multer({ 
    storage: storage
});


router.route('/')
    .get( async (req, res) => {
        try {
            let allFeeds = await Feeds.find({});
            res.status(200).json({
                allFeeds
            });
        } catch (err) {
            res.status(400).json({
                err
            })
        }
    })

    .post(upload.single('photo'), async (req, res) => {
        let {post, postBy} = req.body;

        if (!req.file) {
            const feed = new Feeds({
                post,
                postBy
            });
            try {
                let result = await feed.save();
                res.status(200).json({
                    result
                })
            } catch (err) {
                res.status(200).json({
                    err
                })
            }
        } else {
            const feed = new Feeds({
                post,
                imageUrl: req.file.path,
                postBy,
            }); 
            try {
                let result = await feed.save();
                res.status(200).json({
                    result
                })
            } catch (err) {
                res.status(200).json({
                    err
                })
            }
        }
    })
    .put((req, res) => {
        
    })
      

router.post('/put', async(req, res) => {
        
    res.status(200).json({
        msg: req.file
    })
})
module.exports = router;
