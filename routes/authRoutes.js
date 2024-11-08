const passport = require('passport');

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
    )
};
