import { useEffect } from "react";
import { useState } from "react";
import Movieslist from "./Movieslist";

const Releventmovies = ({ genre }) => {

    let [movies, setmovies] = useState(null)
    useEffect(() => {
        fetch("http://localhost:4000/movies")
            .then((res) => { return res.json() })
            .then((data) => { setmovies(data) })



    }, [])
    return (<div className=" relevent">

        <h1>{genre}</h1>
        <div>
            {movies &&
                <Movieslist movies={movies.filter((m) => { return m.genre.includes(genre) })} title=" Relevent movies" />
            }
        </div>

    </div>);
}

export default Releventmovies;