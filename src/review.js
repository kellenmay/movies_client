class Review {

    static all = []
    static reviewsContainer = document.getElementById("review-container")
    static reviewForm = document.getElementById("form-container")

    constructor({reviewer, post, movie_id}){
        this.reviewer = reviewer
        this.post = post
        this.movie_id = movie_id

        this.element = document.createElement('span')
        this.element.dataset.id = this.id
        this.element.id = `review-${this.id}`

    }

    reviewHTML(){
        this.element.innerHTML += `
        <h4>Review
    s: </h4>
        <ul>
        <li>${this.reviewer} - ${this.post}</li>
        </ul>
        `
        return this.element
    }

    static renderReviewForm() {
        Movie.movieForm.innerHTML += `
        <form id="new-movie-form">
        <input type="text" id="reviewer"> :Your reviewer
        <br>
        <input type="text" id="post"> :post
        <br>
        <input type="submit" id="create">
        <form>
        `
    }



}