let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let FeedsSchema = new Schema({
    post: {
        type: String
    },
    imageUrl: {
        type: String
    },
    likeCount: {
        type: Number,
        default: 0
    },
    likers: [{
        type: String
    }],
    postBy: {
        type: String
    },
    postAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Feeds', FeedsSchema);