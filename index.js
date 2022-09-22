require('dotenv').config();
const express = require('express');
const app = express();

const { API_PORT } = process.env

app.use(express.json());
app.use("/api", require("./routes/app.routes"));

app.listen(API_PORT,function(){
    console.log("Server is running on port 4000");
})