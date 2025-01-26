const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// condense Schema const above to the below structure, showing the mongoose object has a property called "Schema".
// MongoDB will accept as many properties as you want, but mongoose needs to know ahead of time what properties we will have in db, definsed in the Schema object
// Use that property and assign it to a new variable, called "Schema":
const { Schema } = mongoose;

const userSchema = new Schema ({
    // Schema objest will define all properties user will have
    // Track more properties here, as needed
    googleId: String
});

// load the Schema into mongoose to use in passport.js service
// mongoose will only create record if it does not exist
mongoose.model('users', userSchema);

// do not need to require this in other areas for testing, since mongoose gets 
// confused by multiple require statements of same property, giving error