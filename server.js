const express = require('express');
const env = require('dotenv')

env.config({path: './config/config.env'})

const app = express();

const PORT = process.env.PORT || 6000;

app.listen(PORT, console.log(`Server running on: ${PORT} inside: ${process.env.NODE_ENV} mode`))