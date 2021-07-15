function MovieCard(props) {
  console.log(props.movie)
  const movie = props.movie
  return (
    <div className="movie-card" id="movie-1">
      <img alt="movie-poster" src={movie.image} class="movie-image"/>
      <h3>{movie.title}</h3>
      <p>Likes: {movie.likes}</p>
      <button className="like-bttn">❤️</button>
    </div>
  );
}

export default MovieCard;
