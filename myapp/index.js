var express = require('express');
var app = express();
var traverson = require('traverson'),
    JsonHalAdapter = require('traverson-hal'),
    xappToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTU1OTYwOTk3NCwiaWF0IjoxNTU5MDA1MTc0LCJhdWQiOiI1Y2VhZDM4Mzk5ZTdlMjc0YzQ2MTY3NzEiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNWNlYzg3ZjZmYTJlZmQwMDBlYzc0YTNjIn0.VGCQAOF2bKPA23w-Gqd4Fd8Y0pCEaQ_DeRToLGBBEsc';


app.use('/static', express.static(__dirname + '/public'));

app.set('view engine', 'jsx')

app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {

    traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter);
    api = traverson.from('https://api.artsy.net/api').jsonHal();

    api.newRequest()
        .follow('artist')
        .withRequestOptions({
            headers: {
                'X-Xapp-Token': xappToken,
                'Accept': 'application/vnd.artsy-v2+json'
            }
        })
        .withTemplateParameters({ id: 'andy-warhol' })
        .getResource(function(error, andyWarhol) {
            res.render('about', andyWarhol)
            console.log(andyWarhol.name + 'was born in ' + andyWarhol.birthday + ' in ' + andyWarhol.hometown);
        });

})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});