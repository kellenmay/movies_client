class ReviewService {

    constructor(endpoint){
        this.endpoint = endpoint
    }


    createReview(){
        const review = {
            title: document.getElementById('reviewer').value,
            image_url: document.getElementById('post').value
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'            
            },
            body: JSON.stringify(review)
        }

        fetch(`${this.endpoint}/movie_reviews`, configObj)
        .then(resp => resp.json())
        .then(review => {
            const r = new review(review)
            r.displayOnDOM()
        })
        
    }

    getReviews(){
        fetch(`${this.endpoint}/review_reviews`)
        .then(resp => resp.json())
        .then(reviews => {debugger})
    }
}