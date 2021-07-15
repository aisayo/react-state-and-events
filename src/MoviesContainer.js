import MovieCard from "./MovieCard";
import movies from './movieApi'

function MoviesContainer() {
    const moviesCard = movies.map(movie => <MovieCard movie={movie}/>)
  return (
    <div className="movie-container">
      <h1>Movie Database</h1>
      <div>
        <input type="text" placeholder="Search a movie..." />
        <button>Go</button>
      </div>
      {moviesCard}
    </div>
  );
}

export default MoviesContainer;
