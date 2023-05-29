import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movieslist from "./Movieslist";

const Search= () => {
    let {search}=useParams()
    let [movies, setmovies] = useState(null);
    let [error, seterror]=useState(null);
    let [pending, setpending]=useState(true)


    useEffect(() => {
          setmovies(null);
          setpending(true);

        setTimeout(() => {
            fetch(" http://localhost:4000/movies")
                .then((res) => { 
                    return res.json() })
                .then((data) => {
                    let d=data.filter((m)=>{ 
                        return( (m.moviename.toLowerCase().startsWith(search.toLowerCase()))||
                         (m.genre.toLowerCase().includes(search.toLowerCase()))||
                         (m.languages.includes(search))
                         )})
                   
                    setmovies(d)
                    setpending(false)
                })
                .catch((err)=>{ seterror("404 Network issue !!! please try again later");
                               setpending(false);
                            });
        }, 3000)
    }, [search])



 
    return ( <div className="search-age">
             {pending==true && movies==null && <h1>Loading.....</h1>}
             { error && <h1>{error}</h1>}
         {movies &&
                <Movieslist movies={movies} title="search movies" />
           }

    </div> );
}
 
export default Search;