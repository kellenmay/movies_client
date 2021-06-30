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
        <h4>${review.reviewer} </h4>
        <br>
        <ui> ${review.comment}</ui>
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

    appendReviewtoDom() {
        const movie = event.target.parentNode
        const post = document.getElementById(`reviews-container-${movie.dataset.id}`)
        post.innerHTML += ` 
        <div data-id="review-container-${this.id}", id="review-container-${this.id}"> 
        ${this.reviewer}
        <br>
        ${this.comment}
        <br>
        <br>
        <button class='deleteBttn' id='delete-review-bttn-${this.id}'>Delete Review</button>  
        <br>
        <br>
        </div>  
        `
        const deleteButtons = document.querySelectorAll('.deleteBttn')
        for( const deleteButton of deleteButtons) {
            deleteButton.addEventListener('click', this.handleClickDeleteReview)
        }
        // debugger

    }


    handleClickDeleteReview = (event) => { 
       
        let movieID = parseInt(event.target.parentNode.parentNode.parentNode.dataset.id)
        if (event.target.innerText === 'Delete Review'){  
            event.target.parentNode.remove() 
            reviewService.deleteReview(movieID, this.id)
        }
    }


}