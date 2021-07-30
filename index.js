const moviesContainer = document.getElementById("movie-container")
const movieForm = document.getElementById("form-container")
const reviewForm = document.getElementById("form-container")


const base_url = "http://127.0.0.1:3000"
const movieService = new MovieService(base_url)
const reviewService = new ReviewService(base_url)

movieService.getMovies()
Movie.renderForm()

document.querySelector("#alpha-btn").addEventListener('click', function(){

    const movies = Movie.all
    let sortedMovies = movies.sort((a,b) => (a.title > b.title) ? 1 : -1)
    moviesContainer.innerHTML = ""

    for(movie of sortedMovies){
    movie.element.innerHTML = ""
    movie.displayOnDOM()
    }

})    

