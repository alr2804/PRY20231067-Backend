const express = require('express');
const app = express();
const cors = require('cors');
const {indexRoutes} = require('./api/index.routes');

// Middlewares
app.use(express.json());

app.use(cors());

indexRoutes(app);

module.exports = app;
