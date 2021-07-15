function MovieCard(props) {
  const movie = props.movie
  return (
    <div className="movie-card">
      <img alt="movie-poster" src={movie.image} className="movie-image"/>
      <h3>{movie.title}</h3>
      <p>Likes: {movie.likes}</p>
      <button className="like-bttn" onClick={props.handleLike}>❤️</button>
    </div>
  );
}

export default MovieCard;
