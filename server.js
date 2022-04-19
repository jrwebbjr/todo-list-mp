require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");
const PORT = process.env.PORT || 3001;
const todoController = require("./controllers/Todo");


//Middleware
app.use(cors());
app.use(express.json());
app.use("/todos", todoController);

app.listen(PORT, () => {
    console.log(`Drippin on Port: ${PORT}`)
})