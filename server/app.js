const dotenv = require('dotenv');
const express = require('express');

const app = express();

// Load environment variables from .env
dotenv.config();

app.get('/', (res, req) => {
    req.send("Hello");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server listening on Port: ", PORT);
});