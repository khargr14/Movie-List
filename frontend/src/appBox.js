class AppBox {
    movies = []
    review = []
    url = "http://localhost:3000"
    dailyPickS
    
    getMovies(){

        console.log("something")
        fetch(this.url + '/movies')
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(err => alert(err))

    }

    renderMovie(){
        
    }

}