import "../css/Moviecard.css"
import { useMovieContext } from "../context/MovieContext"

function Moviecard({ movie }) {
    const { isFavourite, addToFavourites, removeFromFavourites } = useMovieContext();
    const favourite = isFavourite(movie.id)

    function onFavouriteClick(e) {
        e.preventDefault()
        if (favourite) removeFromFavourites(movie.id)
        else addToFavourites(movie)
    }

    return (
        <div className="movie-card">
            <div className="movie-poster" >
                {/* Guard the image in case movie.url is missing */}
                <img src={movie?.url || `https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie?.title || "movie-title"} />
                <div className="movie-overlay" >
                    <button className={`favourite-btn ${favourite ? 'active' : ""}`} onClick={onFavouriteClick}> ♥ </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie?.title}</h3>
                <p>{movie?.release_date?.split("-")[0]}</p>
            </div>
        </div>
    )
}

export default Moviecard

