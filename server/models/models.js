var mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    rating: {type: Number, min: 1, max: 5},
    comment: {type: String, required: [true, "Please leave a comment"], maxlength: 60, minlength: 3},
}, {timestamps: true});

const CakeSchema = new mongoose.Schema({
    name: {type: String, required: [true, "A baker needs a name"], minlength: 3},
    image: {type: String, required: [true, "A cake can't be rated if we can't see it!"]},
    comments: [CommentSchema],
}, {timestamps: true});

mongoose.model('Cake', CakeSchema);
mongoose.model('Comment', CommentSchema);
const Cake = mongoose.model('Cake');
const Comment = mongoose.model('Comment');