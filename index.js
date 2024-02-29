// Heroku muse use the Node and npm version installed on local machine: declare the node and npm version in package.json (use node -v and npm -v to find current version)
const express = require ('express');
const app = express();

// send request using "app" - app.get (get info), app.post (send info), put (update all properties of something), delete )(delete something), patch (update one or two properties)
app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

// use environment (env) variable to assign port, since Heroku will assign the port and it cannot be predicted.  If in development environment, or if no PORT assigned, will use default PORT 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);