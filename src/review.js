class Review {

    static all = []
    static reviewsContainer = document.getElementById("review-container")
    static reviewForm = document.getElementById("form-container")


    constructor({reviewer, comment, movie_id, id}){
        this.reviewer = reviewer
        this.comment = comment
        this.movie_id = movie_id
        this.id = id

        this.element = document.createElement('span')
        this.element.dataset.id = this.id
        this.element.id = `review-${this.id}`

        // inside we have individual review containers
    }

    static reviewHTML(review){
        // find movie ID here

    let movie = review.movie_id
    const toPost = document.getElementById(`reviews-container-${movie}`)
    toPost.innerHTML = ""
    toPost.innerHTML += `
        <div data-id="review-container-${review.id}", id="review-container-${review.id}">
        <h4>${review.reviewer} </h4>
        <br>
        <ui> ${review.comment}</ui>
        <br>
        <br>
        <button id='delete-review-bttn'>Delete Review</button>  
        <br>
        <br>
        </div>
        `
    document.querySelector('#delete-review-bttn').addEventListener('click', review.handleClickDeleteReview)
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


        handleClickDeleteReview = () => {  
            let movieID = parseInt(event.target.parentNode.parentNode.dataset.id)
            if (event.target.innerText === 'Delete Review'){
                event.target.parentNode.remove() 
                reviewService.deleteReview(movieID, this.id)
            }
        }
    



}