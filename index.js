const base_url = "http://127.0.0.1:3000"
const movieService = new MovieService(base_url)

movieService.getMovies()