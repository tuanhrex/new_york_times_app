const db = require('./models')

db.movie.findOrCreate({
    where: { title: 'Godfather'},
    defaults: {
        byline: 'Vincent Canby',
        headline: 'Godfather, Part II',
        date: Date.now(),
        url: 'http://nytimes.com'
    }
}).then(([movie, created]) => {
    console.log(true)
    console.log(movie);
})