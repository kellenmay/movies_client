class Movie {

    static all = []
    static moviesContainer = document.getElementById("movie-container")
    static movieForm = document.getElementById("form-container")


    constructor({id, title, image_url, description}){
        this.id = id
        this.title = title
        this.image_url = image_url
        this.description = description

        this.element = document.createElement('div')
        this.element.dataset.id = this.id
        this.element.id = `movie-${this.id}`
        this.element.addEventListener('click', this.handleClickDelete)

        Movie.all.push(this)
    }

    movieHTML(){
        this.element.innerHTML += `
            <div>
                <h3>${this.title}</h3>
                <img id="movie-poster" src='${this.image_url}' width = 150px />
                <h3>${this.description}</h3>
            </div>
            <button id='delete-bttn'>Delete</button>
            <br>
            <br>

        `
        return this.element
    }

    displayOnDOM(){
        Movie.moviesContainer.append(this.movieHTML())
        this.element.querySelector("img").addEventListener('click', this.handleClickReview) 
    }

    static renderForm() {
        Movie.movieForm.innerHTML += `
        <form id="new-movie-form">
        <input type="text" id="title"> :Title
        <br>
        <input type="text" id="image_url"> :Poster
        <br>
        <input type="text" id="description"> :Description
        <br>
        <input type="submit" id="create">
        <form>
        `
    }

    handleClickDelete = () => {
        if (event.target.innerText === 'Delete'){
            this.element.remove()
            movieService.deleteMovie(this.id)
        }
    }

    handleClickReview = () => {
        //separate submit function or use conditionals
        const r = Review.renderReviewForm()

        const post = document.getElementById(event.target.parentNode.parentNode.id)
        post.innerHTML += r    

        document.getElementById("create").addEventListener('click', reviewService.createReview)
        
        // toggle click on and off
        // add review to movie DIV
        // remove form after submitting review
        // show all reviews for movie on click. add another div to inside movie-id div for this?
    }
    
    handleSubmit(){
        
    }


    // static showReview() {
    //     // base URL movies/id/movie_reviews -> nested hash 
    //     const id = this.parentNode.parentNode.dataset.id
    //     fetch(`${movieService.endpoint}/movies/${id}/movie_reviews`)
    //     .then(resp => resp.json())
    //     .then(reviews => {})

    // }


}

