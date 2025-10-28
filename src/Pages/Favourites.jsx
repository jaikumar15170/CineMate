import "../css/Favourite.css"
import { useMovieContext } from "../context/MovieContext"
import Moviecard from "../Components/Moviecard"

function Favourite() {
    const { favourites } = useMovieContext();

    if (favourites) {
        return (
            <div className="favourites">
                <h2>Your Favourites Movies</h2>
                <div className="movie-grid">
                    {favourites.map(movie => (<Moviecard movie={movie} key={movie.id} />))}
                </div>
            </div>
        )
    }
    return <div className="favourites-empty">
        <h2>No Favourite Movies Yet</h2>
        <p>Start adding movies to your favourites and they will appears here</p>
    </div>
}

export default Favourite