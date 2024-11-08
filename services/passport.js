// use this file to keep all of the configurations for passport 

// Heroku muse use the Node and npm version installed on local machine: declare the node and npm version in package.json (use node -v and npm -v to find current version)

const passport = require('passport');
// require('dotenv').config;

// Google OAuth20 has various properties.  We only need Strategy for this app.
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// access user model class
const User = mongoose.model('users');

// new GoogleStrategy creates new instance of Google Strategy for users to authenticate themselves inside of application
// console.developers.google.com
passport.use(
    // GoogleStrategy has an internal identifier called "google" - use this in passport authentication
    new GoogleStrategy(
        {
            // format below does not work.  Try importing variables
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            // give Passport the below route to send users after they grant access to application
            callbackURL: '/auth/google/callback'
        }, 
            (accessToken, refreshToken, profile, done) => {
                // console.log('access token', accessToken);
                // // access token expires after a certain amount of time.  Refresh token automatically updates access token.
                // console.log('refresh token', refreshToken);
                // console.log('profile: ', profile)
                // create a new user model instance with a googleId of profile.id
                // to get the model instance to persist to MongoDB, ass ".save();" at end
                new User({ googleId: profile.id }).save();
        }
    )
);