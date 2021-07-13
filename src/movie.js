class Movie {
    static all = []
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
    // creates movie html
    movieHTML(){

        this.element.innerHTML += `
            <div class="border-solid border-2 border-blue-600 h-full ">
                <h3>${this.title}</h3>
                <img id="movie-poster-${this.id}" src='${this.image_url}' width = 150px />
                <h3>${this.description}</h3>
            </div>
            <div id='reviews-container-${this.id}'>
            </div>
            <button id='delete-bttn' class="bg-gray-500 text-white font-bold rounded">Delete Movie</button>
            <button id='reviews-bttn' class="bg-gray-500 text-white font-bold rounded">Show All Reviews</button>
            <br>
            <br>
        `
        // data-id gives dataset_id (.dataset) not an id
        return this.element
    }
    // renders movie to dom
    displayOnDOM(){
        moviesContainer.append(this.movieHTML())
        this.element.querySelector("img").addEventListener('click', this.handleClickReview) 
    }
    // renders movie form and adds event listener to it
    static renderForm() {
        movieForm.innerHTML += `
        <form id="new-movie-form">
        <input type="text" id="title" class=border> :Title
        <br>
        <input type="text" id="image_url" class=border> :Poster
        <br>
        <input type="text" id="description" class=border> :Description
        <br>
        <input type="submit" id="create" class="bg-gray-500 text-white font-bold rounded">
        <form>
        `
        movieForm.addEventListener('submit', this.handleSubmit)
    }

    // handles new movie form submission
    static handleSubmit(){
        event.preventDefault()
        movieService.createMovie()
        event.target.reset()
    }
    
    // deletes movie 
    handleClickDelete = () => {
        if (event.target.innerText === 'Delete Movie'){
            this.element.remove()
            movieService.deleteMovie(this.id)
        }
    }
    // shows selected movie's reviews 
    handleShowAllReviews = () => {
        if (event.target.innerText === 'Show All Reviews'){
            movieService.showAllReviews(this.id)
        }
    }
    //what does this do
    handleClickReview = () => {
        const r = Review.renderReviewForm()
        const post = document.getElementById(event.target.parentNode.parentNode.id)
        post.innerHTML += r    
        document.getElementById("new-movie-form").addEventListener('submit', this.handleReviewSubmit)
        // document.getElementById("create").addEventListener('click', handleReviewSubmit)
        // toggle click on and off
    }
    // movie review submission
    handleReviewSubmit(){
        event.preventDefault()
        reviewService.createReview(event.target.parentNode)
        event.target.parentElement.firstElementChild.firstElementChild.nextElementSibling.addEventListener('click', Review.renderReviewForm)
        event.target.remove()
    }
}