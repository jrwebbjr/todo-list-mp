require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");
const PORT = process.env.PORT || 3001;



//Middleware
app.use(cors());
app.use(express.json());
app.use();

app.listen(PORT, () => {
    `Drippin on Port: ${PORT}`
})