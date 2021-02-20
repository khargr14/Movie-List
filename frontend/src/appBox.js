class AppBox {
    static movies = []
    review = []
    url = "http://localhost:3000"
    dailyPicks

    bindEventListeners() {
        const btn = document.getElementById('createWhatToReview');
       
        btn.addEventListener('click', this.getRandomMovies)
    }

    getRandomMovies(){
       
        let randomMovies = [];
        for (let i = 0; i < 4; i++ ){
            randomMovies.push(AppBox.movies[Math.floor(Math.random()*AppBox.movies.length)]);
        };
        return randomMovies;

    }
    
    getMovies(){

        console.log("something");
        fetch(this.url + '/movies')
        .then(resp => resp.json()) 
        .then(data => {
            data.forEach(movie => {
                console.log(data)
                new Movie(movie.title, movie.summary, movie.review)
                console.log(AppBox.movies)
            });
        })
        .catch(err => alert(err));
        
    };

    renderMovies(){
        const ul = document.createElement('ul');
        AppBox.movies.forEach(movie => {
            const li = document.createElement('li');
            li.innerText = movie.summary;
            ul.appendChild(li);
        })
        document.body.appendChild(ul)
    };

}