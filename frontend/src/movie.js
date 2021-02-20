class Movie{
    constructor(title, summary, review){
        this.title = title;
        this.summary = summary;
        this.review = review; 
        AppBox.movies.push(this);
        
    }
}