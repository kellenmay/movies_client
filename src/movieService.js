class MovieService {

    constructor(endpoint){
        this.endpoint = endpoint
    }

    getMovies(){
    fetch(`${this.endpoint}/movies`)
    .then(resp => resp.json())
    .then(movies => {
        for (const movie of movies){
            const m = new Movie(movie) 
            m.displayOnDOM()
        }

    })
    }




    
}