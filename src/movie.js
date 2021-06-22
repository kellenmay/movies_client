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
        this.element.id = `movie-${this.id}`
        this.element.addEventListener('click', this.handleClick)

        Movie.all.push(this)
    }

    movieHTML(){
        this.element.innerHTML += `
            <div>
                <h3>${this.title}</h3>
                <img src=${this.image_url} class="movie-poster" />
                <h3>${this.description}</h3>
            </div>
            <button id='delete-bttn'>Delete</button>
            <br>
            <br>

        `
        return this.element
    }

    displayOnDOM(){
        Movie.moviesContainer.append(this.movieHTML())
    }

    static renderForm() {
        Movie.movieForm.innerHTML += `
        <form id="new-movie-form">
        <input type="text" id="title"> :Title
        <br>
        <input type="text" id="image_url"> :Poster
        <br>
        <input type="text" id="description"> :Description
        <br>
        <input type="submit" id="create">
        <form>
        `
    }



    handleClick = () => {
        if (event.target.innerText === 'Delete'){
            this.element.remove()
            movieService.deleteMovie(this.id)
        }
    }

}

