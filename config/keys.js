// Heroku handles NODE_ENV variable on its own.  This is not provided to user.  Use "NODE_ENV" for this setup.
if (process.env.NODE_ENV === 'production') {
    // we are in production - return prod set of keys
    module.exports = require('./prod');
} else {
    // we are in dev - return the dev keys
    module.exports = require('./dev');
}