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

    }

    reviewHTML(){
        this.element.innerHTML += `
        <h4>Review
    s: </h4>
        <ul>
        <li>${this.reviewer} - ${this.comment}</li>
        </ul>
        `
        return this.element
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
        // why is this faded
        // handleSubmit()
    }

    static removeForm() {
        const form = document.getElementById("new-movie-form")
        form.remove
    }

    static handleSubmit(){
        document.addEventListener('click', removeForm)
    }

    // static addReview() {
    //     // base URL movies/id/movie_reviews -> nested hash 
    //     const id = this.parentNode.parentNode.dataset.id
    //     fetch(`${movieService.endpoint}/movies`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'            
    //         },
    //         body: JSON.stringify(review)
    //     })
        
    //     .then(resp => resp.json())
    //     .then(reviews => {debugger})

    // }



}