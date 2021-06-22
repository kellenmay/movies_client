class Movie {

    static all = []
    static moviesContainer = document.getElementById("movie-container")
    static movieForm = document.getElementById("form-container")
    constructor({id, title, image_url, description}){
        this.id = id
        this.title = title
        this.image_url = image_url
        this.description = description

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `contact-${this.id}`
        this.element.addEventListener('click', this.handleClick)

        Movie.all.push(this)
    }

    movieHTML(){
        this.element.innerHTML += `
        <div>
            <h3>${this.title}</h3>
            <h3>${this.image_url}</h3>
        </div>
        <button id='delete-bttn'>Delete</button>
        <br>
        <br>

        `
        return this.element
    }

    displayOnDOM(){
        Movie.moviesContainer.appendChild(this.movieHTML())
    }

    static renderForm() {
        Movie.movieForm.innerHTML += `
        <form id="new-movie-form">
        Title: <input type="text" id="title">
        Poster: <input type="text" id="image_url">
        Description: <input type="text" id="description">
        <input type="submit" id="create"
        <form>
        `
    }



    handleClick = () => {
        if(event.target.innerText === 'Delete'){
            movieService.deleteMovie(this.id)
        }
    }


}

