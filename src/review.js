class Review {

    static all = []
    static reviewsContainer = document.getElementById("review-container")
    static reviewForm = document.getElementById("form-container")


    constructor({reviewer, comment, movie_id}){
        this.reviewer = reviewer
        this.comment = comment
        this.movie_id = movie_id

        this.element = document.createElement('span')
        this.element.dataset.id = this.id
        this.element.id = `review-${this.id}`
        // big all reviews container
        // inside we have individual review containers
    }

    static reviewHTML(review){
       
        const toPost = document.getElementById('reviews-container')
        toPost.innerHTML += `
        <h4>Reviews
        </h4>
        <ul>
        <li>${review.reviewer} - ${review.comment}</li>
        </ul>
        `
        // return toPost
    }

    static renderReviewForm() {

        // relocate 
        event.target.removeEventListener('click', this.handleClickReview)
        return `
        <form id="new-movie-form">
        <input type="text" id="reviewer"> :Your reviewer
        <br>
        <input type="text" id="comment"> :comment
        <br>
        <input type="submit" id="create">
        <form>
        `
        
        }

    static getReviewForm() {
        
        const form = document.getElementById("new-movie-form")
        form.remove
    }

}