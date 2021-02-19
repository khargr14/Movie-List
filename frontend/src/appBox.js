class AppBox {
    movies = []
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
            randomMovies.push(this.movies[Math.floor(Math.random()*items.length)]);
        };
        debugger
        return randomMovies;

    }
    
    getMovies(){

        console.log("something");
        fetch(this.url + '/movies')
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(err => alert(err));

    }

    renderMovie(){
        
    }

}