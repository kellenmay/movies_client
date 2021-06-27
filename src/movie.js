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
        this.element.addEventListener('click', this.handleShowAllReviews)

        Movie.all.push(this)
    }

    movieHTML(){
        this.element.innerHTML += `
            <div>
                <h3>${this.title}</h3>
                <img id="movie-poster" src='${this.image_url}' width = 150px />
                <h3>${this.description}</h3>
            </div>
            <div id='reviews-container'>
            <div id="review-container">

    
            </div>
            </div>
            <button id='delete-bttn'>Delete</button>
            <button id='reviews-bttn'>Show All Reviews</button>
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

    handleShowAllReviews = () => {
        if (event.target.innerText === 'Show All Reviews'){
            movieService.showAllReviews(this.id)
        }
    }

    handleClickDelete = () => {
        if (event.target.innerText === 'Delete'){
            this.element.remove()
            movieService.deleteMovie(this.id)
        }
    }


    handleClickReview = () => {
        const r = Review.renderReviewForm()
        const post = document.getElementById(event.target.parentNode.parentNode.id)
        post.innerHTML += r    
        document.getElementById("new-movie-form").addEventListener('submit', this.handleReviewSubmit)
        // document.getElementById("create").addEventListener('click', handleReviewSubmit)
        
        // toggle click on and off


    }
    


    handleReviewSubmit(){
        event.preventDefault()
        reviewService.createReview(event.target.parentNode)
        event.target.remove()
    }





}

