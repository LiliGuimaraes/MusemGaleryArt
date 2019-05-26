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