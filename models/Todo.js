const { Schema, model } = require("./connection");

const todoSchema = Schema({
    title: {
        required: true,
        type: String
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

module.exports = model("Todo", todoSchema);