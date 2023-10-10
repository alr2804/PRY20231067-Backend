const express = require('express');
const app = express();
const cors = require('cors');
var morgan = require('morgan')

const swaggerUI = require('swagger-ui-express');
const swaggerSetup = require('./docs/swagger');



const {indexRoutes} = require('./api/index.routes');

//SWAGGER CONFIGURATION
app.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerSetup));

// Middlewares
app.use(express.json());

app.use(cors());
morgan('tiny')

indexRoutes(app);

module.exports = app;
