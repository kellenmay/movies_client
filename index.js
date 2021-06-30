const moviesContainer = document.getElementById("movie-container")
const movieForm = document.getElementById("form-container")
const reviewForm = document.getElementById("form-container")
const base_url = "http://127.0.0.1:3000"
const movieService = new MovieService(base_url)
const reviewService = new ReviewService(base_url)
movieService.getMovies()
Movie.renderForm()