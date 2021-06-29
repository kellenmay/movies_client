class ReviewService {

    constructor(endpoint){
        this.endpoint = endpoint
    }

    createReview(element){
        // need to post this to review div
        const review = {
            reviewer: document.getElementById('reviewer').value,
            comment: document.getElementById('comment').value,
            movie_id: parseInt(element.dataset.id)
        }
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'            
            },
            body: JSON.stringify(review)
        }
          // can I make this a div or span
        fetch(`${reviewService.endpoint}/movie_reviews`, configObj)
        .then(resp => resp.json())
        .then(review => {
            const r = new Review(review)
            // grab movie id 
            const toPost = document.getElementById(`reviews-container-${element.dataset.id}`)
            toPost.innerHTML += `
                ${r.reviewer}
                <br>
                ${r.comment}
                
            `
        })
    }

    addReviewToContainer() {
        const container = document.getElementById("review-container")
        this.createReview(element)
    }

    getReviews(){
        fetch(`${this.endpoint}/movie_reviews`)
        .then(resp => resp.json())
        .then(reviews => {debugger})
    }

        // how can I get the correct path for a comment
        // need 2 id's 

        deleteReview(movie, id){
            fetch(`${this.endpoint}/movies/${movie}/movie_reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(resp => resp.json())
            .then(json => alert(json.message))

        }
}