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
        this.element.addEventListener('click', this.handleClickDeleteReview)

        // inside we have individual review containers
    }

    static reviewHTML(review){
        
        const toPost = document.getElementById('review-container')
        toPost.innerHTML = ""
        toPost.innerHTML += `
        <h2>Reviews</h2>
        <h4>${review.reviewer} </h4>
        <br>
        <ui> ${review.comment}</ui>
        <br>
        <br>
        <button id='delete-review-bttn'>Delete Review</button>
        <br>
        <br>
        `
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
            debugger;
            if (event.target.innerText === 'Delete Review'){
                this.element.remove()
                reviewService.deleteReview(this.id)
            }
        }
    



}