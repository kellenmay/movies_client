const base_url = "http://127.0.0.1:3000"
const movieService = new MovieService(base_url)

Movie.movieForm.addEventListener('submit', handleSubmit)

Movie.moviesContainer.addEventListener('click', displayReview)
 debugger;
movieService.getMovies()

Movie.renderForm()

function handleSubmit() {
    event.preventDefault()
    movieService.createMovie()
    event.target.reset()
}

function () {
    debugger;
}
function displayReview() {
    ReviewService.createReview()


}