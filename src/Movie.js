import React from "react";
import MovieCard from "./MovieCard";

class Movie extends React.Component {
  state = {
    id: this.props.id,
    title: this.props.movie.title,
    image: this.props.movie.image,
    likes: this.props.movie.likes,
  };

  handleLike = () => {
    this.setState({ likes: this.state.likes + 1 });
  };

  render() {
    return <MovieCard movie={this.state} handleLike={this.handleLike} />;
  }
}

export default Movie;
