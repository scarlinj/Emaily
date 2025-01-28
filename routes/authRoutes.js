const passport = require('passport');
// Google OAuth20 has various properties.  We only need Strategy for this app.
const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = app => {
    // send request using "app" - app.get (get info), app.post (send info), put (update all properties of something), delete )(delete something), patch (update one or two properties)
    // app.get('/', (req, res) => {
    //     res.send({ bye: 'buddy' });
    // });



        app.get(
        '/auth/google', 
        // haven't defined "google" below, but passport knows this is an inherent property of GoogleStrategy already
        // using Google to give users a unique ID, stored in MongoDB, to identify their user.  MongoDB stores list of users in db.  
        // OAuth only gives us the GoogleID, which is all we care about to ID users
        // Everything else about user besides the GoogleID is stored in db
        passport.authenticate('google', {
            // google already has list of scopes or permissions we can ask from a user account - use the below, for now
            scope: ['profile', 'email']
    })
    // console.log('running index.js')
    );

    // redirect for http://localhost:5000/auth/api/auth/google/callback is not allowed ("redirect URI mismatch") - assign this below to allow

    app.get(
        '/auth/google/callback', 
        passport.authenticate('google')
    );

    // API route to return user currently logged into application
    // use req and res objects as arguments for the below function
    app.get(
        '/api/current_user', (req, res) => {
            // immediately send back requested user, to make sure they have access to user
            res.send(req.user);
        }
    )
};
