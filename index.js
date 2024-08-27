const express = require('express');
// Do not need to assign the passport file below to use specific functions - just need these functions available to use
require('./services/passport');

const app = express();

// combine require statement from top to the return statement below, immediately calling/invoking that funciton
require('./routes/authRoutes')(app);

// use environment (env) variable to assign port, since Heroku will assign the port and it cannot be predicted.  If in development environment, or if no PORT assigned, will use default PORT 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);