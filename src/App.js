import './app.css'

function App() {
  return (
    <div className="movie-container">
      <h1>Movie Database</h1>
      <div>
        <input type="text" placeholder="Search a movie..." />
        <button>Go</button>
      </div>
      <div className="movie-card" id="movie-1">
        <h2>Movie Image</h2>
        <h3>Movie Name</h3>
        <p>Movie Rating</p>
        <button>Like &lt;3</button>
      </div>
      <div className="movie-card" id="movie-2">
        <h2>Movie Image</h2>
        <h3>Movie Name</h3>
        <p>Movie Rating</p>
        <button>Like &lt;3</button>
      </div>
      <div className="movie-card" id="movie-3">
        <h2>Movie Image</h2>
        <h3>Movie Name</h3>
        <p>Movie Rating</p>
        <button>Like &lt;3</button>
      </div>
    </div>
  );
}

export default App;
