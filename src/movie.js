class Movie {

    static all = []

    static moviesContainer = document.getElementById("movie-container")

    constructor({id, title, image_url, description}){
        this.id = id
        this.title = title
        this.image_url = image_url
        this.description = description

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `contact-${this.id}`

        Movie.all.push(this)
    }

    movieHTML(){
        this.element.innerHTML += `
        <div>
            <h3>${this.title}</h3>
            <h3>${this.image_url}</h3>
        </div>
        `
        return this.element
    }

    displayOnDOM(){
        Movie.moviesContainer.appendChild(this.movieHTML())
    }

    
}