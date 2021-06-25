class ReviewService {

    constructor(endpoint){
        this.endpoint = endpoint
    }


    createReview(element){
    //    debugger;
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
            element.innerHTML += `
                ${r.reviewer}
                ${r.comment}
            `
            // r.displayOnDOM()
        })

        
    }

    getReviews(){
        fetch(`${this.endpoint}/movie_reviews`)
        .then(resp => resp.json())
        .then(reviews => {debugger})
    }
}