const express = require('express');
const session = require('express-session');

const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
// must call the User model before passport, to be able to define the User model model that we use in passport
require('./models/User');
// Do not need to assign the passport file below to use specific functions - just need these functions available to use
require('./services/passport');


// to connect to MongoDB, use the standard MongoDB URI
// Use Mongoose to create a "model class" that automatically creates a collection of records inside of MongoDB
// with this model, user ID saved to the "users" collection
// models are saves in the "models" folder
mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    // configuration object expects two properrties: maxAge and 
    // maxAge is how long until cookie expires.  This measures in miliseconds, so multiply days times hours, seconds, miliseconds.
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // key used to encrypt cookie
    keys: [keys.cookieKey]
  })  
);
app.use(passport.initialize());
app.use(passport.session());

// combine require statement from top to the return statement below, immediately calling/invoking that funciton
require('./routes/authRoutes')(app);

// use environment (env) variable to assign port, since Heroku will assign the port and it cannot be predicted.  If in development environment, or if no PORT assigned, will use default PORT 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);