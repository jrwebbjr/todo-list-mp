const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");



//Routes - induces

//Index Route

router.get("/", (req, res) => {
    Todo.find({}, (err, foundTodos) => {
        if(!err){
            res.status(200).json(foundTodos)
        } else {
            res.status(400).json(err)
        }
    })
})

//Delete Route

router.delete("/:id", (req, res) => {
    Todo.findByIdAndDelete(req.params.id, (err) => {
        if(!err){
            res.status(200).json({message: "Deleted that Todo"})
        } else {
            res.status(400).json(err)
        }
    })
})

//Update Route



//Create Route

router.post("/", (req, res) => {
    const { body } = req;

    Todo.create(body, (err, createdTodo) => {
        if(!err){
            res.status(200).json({message: "All Good!", createdTodo: createdTodo})
        } else {
            res.status(400).json(err)
        }
    })
})

