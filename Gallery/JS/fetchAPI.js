/* Import the express lirbary 
make node server to serve the*/
const express = require('express');
var traverson = require('traverson');

// Import the axios library, to make HTTP requests
const axios = require('axios');


// This is the client ID and client secret that you obtained
// while registering the application
const clientID = 'd32b860e1a3f3435695a'
const clientSecret = '79330bdc99ca3d3f3b829b9e66cc6c69'

// Create a new express application and use
// the express static middleware, to serve all files
// inside the public directory
const app = express()
app.use(express.static(__dirname + '/public'))

// Declare the redirect route
app.get('/oauth/redirect', (req, res) => {
    // The req.query object has the query params that
    // were sent to this route. We want the `code` param
    const requestToken = req.query.code
    axios({
        // make a POST request
        method: 'post',
        // to the Github authentication API, with the client ID, client secret
        // and request token
        url: `https://api.artsy.net/api/tokens/xapp_token?client_id=${clientID}
        &client_secret=${clientSecret}&code=${requestToken}`,
        // Set the content type header, so that we get the response in JSOn
        headers: {
            accept: 'application/json'
        }
    }).then((response) => {
        // Once we get the response, extract the access token from
        // the response body
        const accessToken = response.data.access_token
            // redirect the user to the welcome page, along with the access token
        res.redirect(`/welcome.html?access_token=${accessToken}`)
    })
})

app.use(express.static(__dirname + '/public'))
app.listen(8080)