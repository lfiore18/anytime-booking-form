const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');

// Needed to allow cross origin resource sharing
const cors = require('cors');

const app = express();

// Load environment variables from .env
dotenv.config();

// Get the property model
const Property = require('./models/property');

// Middleware
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log(err);
});

app.get('/', (req, res) => {
    res.send(200);
});

app.get('/properties', async (req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (err)
    {
        res.status(400).send(err.message)
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server listening on Port: ", PORT);
});