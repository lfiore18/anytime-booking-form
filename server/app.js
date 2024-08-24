const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Load environment variables from .env
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.logo(err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server listening on Port: ", PORT);
});