import { useEffect, useState } from "react";
import { Link} from "react-router-dom";

const Movieslist = ({ movies, title }) => {

    let [favid, setfavid]=useState([]);
    let [altered, setaltered]=useState(0);
    useEffect(()=>{
        let fav = JSON.parse(localStorage.getItem("fav"));
        setfavid(fav.map((m)=>{return m.id}))
    },[altered]);

    let handleAddtofav = (movie)=>{
        let fav = JSON.parse(localStorage.getItem("fav"));
        fav.push(movie);
        fav = JSON.stringify(fav);
        localStorage.setItem("fav" , fav);
        // alert("movie added to favorites list")
        setaltered(altered+1)
      }

      let handleRemovetofav=(id)=>{
        let fav = JSON.parse(localStorage.getItem("fav"));
       let fav1=fav.filter((m)=>{return m.id!=id})
        localStorage.setItem("fav" ,JSON.stringify(fav1) );
        // alert("movie remove from  favorites list")
        setaltered(altered+1)
        

      }

    return (
        <div>
            <h1 className="title">{title}</h1>
            <div className="movies">
                {movies.map((movie) => {
                    return (
                        <div className="movie">

                            <Link   to={`/details/${movie.id}`}>
                                <img src={movie.poster} alt="poster" width="200px" height="200px" />
                                <h2>{movie.moviename}</h2>
                                <p>{movie.genre}</p>
                            </Link>
                          { favid.includes(movie.id)? <button className="remove-btn" onClick={()=>{ handleRemovetofav(movie.id) }}>  <i class='bx bxs-heart'  ></i>    </button>:
                            
                            <button className="add-btn" onClick={()=>{ handleAddtofav(movie) }}><i class='bx bx-heart'></i></button>}
                        </div>
                    )

                })}
            </div>

        </div>
    );
}

export default Movieslist;