const radio = {
    stations: [{ // each station is an object
            name: 'Pop',
            songs: [{
                artist: 'Britney Spears',
                title: 'Circus'
            }, {
                artist: 'Katy Perry',
                title: 'ET'
            }, {
                artist: 'Justin Bieber',
                title: 'Peaches'
            }] // songs are an array of song objects and name is a string
        },
        {
            name: 'Latin',
            songs: [{
                artist: 'Rauw Alejandro',
                title: 'Punto 40'
            }, {
                artist: 'Bad Bunny',
                title: 'Efecto'
            }, {
                artist: 'Karol G',
                title: 'PROVENZA'
            }]
        }
    ]
}
console.log(radio.stations[0].songs[1])

//console.log("Now Playing: " + song.title +  " by " + song.artist)