import Movie from "./Movie";
import movies from "./movieApi";
import React from "react";

class MoviesContainer extends React.Component {
  state = {
    movies: []
  }

  componentDidMount(){
    this.setState({movies: movies})
  }

  render() {
    const movies = this.state.movies.map((movie) => <Movie movie={movie} key={movie.title}/>);

    return (
      <div className="movie-container">
        <h1>Movie Database</h1>
        <div>
          <input type="text" placeholder="Search a movie..." />
          <button>Go</button>
        </div>
        {movies}
      </div>
    );
  }

}

export default MoviesContainer;
