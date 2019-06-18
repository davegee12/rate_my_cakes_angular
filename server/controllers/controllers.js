var mongoose = require('mongoose');
require('../models/models.js');

const Cake = mongoose.model('Cake');
const Comment = mongoose.model('Comment');

module.exports={
    index: (req, res) => {
        Cake.find({}, (err, result) => {
            console.log("######################################################")
            console.log(result);
            if(err){
                res.json({error: err})
            }
            else{
                console.log("######################################################")
                res.json({result: result})
            }
        })
    },
    show: (req, res) => {
        Cake.findById(req.params.id, (err, id) => {
            if(err){
                res.json({error: err})
            }
            else{
                res.json({result: id})
            }
        })
    },
    createCake: (req, res) => {
        console.log("POST DATA", req.body);
        Cake.create(req.body, (err, result) => {
            if (err){
                res.json({error: err})
            }
            else{
                console.log("Comment successfully added to data")
                res.json({result: result});
            }
        })
    },
    createComment: (req, res) => {
        console.log("POST DATA", req.body);
        Comment.create(req.body, (err, data) => {
            if (err){
                res.json({error: err})
            }
            else{
                console.log("Checkpoint")
                Cake.findOneAndUpdate({_id: req.params.id}, {$push: {comments: data}}, (err, result) => {
                    if (err) {
                        res.json({error: err})
                    } else {
                        console.log("Comment successfully added to Cake!")
                        res.json({result: result});
                    }
                })
            }
        })
    },
    deleteCake: (req, res) => {
        Cake.remove({_id: req.params.id}, (err, result) => {
            if (err){
                res.json({error: err})
            }
            else{
                res.json({result: result});
            }
        })
    }
}