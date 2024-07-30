const mongoose = require('mongoose');
const {model, Schema} = require('mongoose');
mongoose.Schema.Types.String.set('trim', true)

const CommentSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    }
})

module.exports = model("Comment", CommentSchema);