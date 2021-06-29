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

    createMovie(){
        const movie = {
            title: document.getElementById('title').value,
            image_url: document.getElementById('image_url').value,
            description: document.getElementById('description').value
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'            
            },
            body: JSON.stringify(movie)
        }
        
        fetch(`${this.endpoint}/movies`, configObj)
        .then(resp => resp.json())
        .then(movie => {
            const m = new Movie(movie)
            m.displayOnDOM()
        })
        
    } 

    showAllReviews(){
        const movie = event.target.parentNode
        fetch(`${this.endpoint}/movies/${movie.dataset.id}/movie_reviews`)
        .then(resp => resp.json())
        .then(reviews => {
            for (const review of reviews) {
            const r = new Review(review)
            Review.reviewHTML(r)       
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

    static sayHello(){

    }
}