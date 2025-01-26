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
            // You must use the full URL here, or you will get an error
            callbackURL: 'http://localhost:5000/auth/google/callback'
        }, 
            // the "done" callback tells passport that the query is complete and it does not need to find or create a user, so it can resume authentication process
            (accessToken, refreshToken, profile, done) => {
                // console.log('access token', accessToken);
                // access token expires after a certain amount of time.  Refresh token automatically updates access token.
                // console.log('refresh token', refreshToken);
                // console.log('profile: ', profile)

                // any time we reach out to MongoDB database in any way, it is asynchronous.  Must use a "promise" (tool in JS that handles asyncrhonous code)

                // Initiate a search over all the records in the collection.
                // Look through User's collection, find the first record inside collection with a GoogleId of profileId
                User.findOne({ googleId: profile.id }).then((existingUser) => {
                        // if no user has googleId of profileId
                        if(existingUser) {
                            // have record with a given profileId
                            done(null, existingUser);
                        } else {
                            // we don't have record with a given profileId, so make a new record
                            // create a new user model instance with a googleId of profile.id
                            // to get the model instance to persist to MongoDB, add ".save();" at end
                            new User({ googleId: profile.id })
                            .save()
                            .then(user => done(null, user));
                    }
                });
            }
    )
);