const galery = document.getElementById('root');
const matisse = document.createElement('div');
matisse.setAttribute('class', 'authors');
galery.appendChild(matisse);

fetch('https://www.metmuseum.org/api/collection/collectionlisting?q=matisse&perPage=20&artist=Matisse,%20Henri$Henri%20Matisse&sortBy=Relevance&sortOrder=asc&offset=0&pageSize=0=openaccess', {
        method: 'GET',
        headers: {
            'mode': 'no-cors',
            'cache': 'default'
        }
    })
    .then((response) => {
        return response.json();
    })

.then(function(data) {
    console.log('CONEXÃO FEITA')
    console.log(data)
})