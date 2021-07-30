class MovieService {
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getMovies(){
    fetch(`${this.endpoint}/movies`)
    .then(resp => resp.json())
    //.json returns a promise that resolves to the parsed json body
    .then(movies => {
        for (const movie of movies){
            const m = new Movie(movie) 
            m.displayOnDOM()
        }
    })
    }

    createMovie(){
        const movie = {
            title: document.getElementById('title').value,
            image_url: document.getElementById('image_url').value,
            description: document.getElementById('description').value
        }
        // when making a fetch request to back end we have to configure the method we have to run, here we use POST default is GET, 
        // header is content we pass in/get back
        // body is stringified to get sent to back end (Ruby notation)
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'            
            },
            body: JSON.stringify(movie)
        }
        // configObj passes the data that was created as well as defining that it was a POST request
        fetch(`${this.endpoint}/movies`, configObj)
        .then(resp => resp.json())
        .then(movie => {
            const m = new Movie(movie)
            m.displayOnDOM()
        })
    } 

    showAllReviews(){
        const movie = event.target.parentNode
        const post = document.getElementById(`reviews-container-${movie.dataset.id}`)
        fetch(`${this.endpoint}/movies/${movie.dataset.id}/movie_reviews`)
        .then(resp => resp.json())
        .then(reviews => {
            post.innerHTML = ""
            for (const review of reviews) {
            const r = new Review(review)
            r.appendReviewtoDom()
        }
    })
    }
    
    deleteMovie(id){
        fetch(`${this.endpoint}/movies/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }
}