define(function() {
    var internals = {}; // internal state
    var externals = {}; // external api

    internals.films = [];

    externals.results;


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '87a77159ddmshffbdbdff65c8ac9p1073b5jsn3d4b48af615c',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };
    
    fetch('https://rickandmortyapi.com/api/character', options)
        .then(response => response.json())
        .then(response => externals.results = response.results)
        .catch(err => console.error(err));

    externals.getFilm = function(index, cb) {
        cb(internals.films[index]);
    };


    return externals;
});
