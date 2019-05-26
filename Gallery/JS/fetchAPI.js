/* var request = require('superagent');
var traverson = require('traverson');
JsonHalAdapter = require('traverson-hal');

var clientID = 'd32b860e1a3f3435695a',
    clientSecret = '79330bdc99ca3d3f3b829b9e66cc6c69',
    apiUrl = 'https://api.artsy.net/api/tokens/xapp_token',
    xappToken;

request
    .post(apiUrl)
    .send({ client_id: clientID, client_secret: clientSecret })
    .end(function(res) {
        console.log(res)
            /* xappToken = res.body.token;
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
                    console.log(andyWarhol.name + 'was born in ' + andyWarhol.birthday + ' in ' + andyWarhol.hometown);
                });
    });  */

var traverson = require('traverson'),
    JsonHalAdapter = require('traverson-hal'),
    xappToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTU1OTQ5ODI0MywiaWF0IjoxNTU4ODkzNDQzLCJhdWQiOiI1Y2VhZDM4Mzk5ZTdlMjc0YzQ2MTY3NzEiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNWNlYWQzODNmYTJlZmQ1NGM4YzhiYmY0In0.VxCWKu9evor-ff-c31a45kuF-_JkaNP_EUX0fjHy9W4';

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
        console.log(andyWarhol.name + 'was born in ' + andyWarhol.birthday + ' in ' + andyWarhol.hometown);
    });