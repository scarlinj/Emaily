// production keys here
// push this to Heroku
module.exports = {
    // I stored the variables in Heroku and used the variable name (e.g. "GOOGLE_CLIENT_ID") to find static data in Heroku.
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    CI: False
};
