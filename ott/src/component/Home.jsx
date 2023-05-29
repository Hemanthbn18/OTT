import { useEffect, useState } from "react";
import Movieslist from "./Movieslist";

const Home = () => {
    let [movies, setmovies] = useState(null);
    let [error, seterror]=useState(null);
    let [pending, setpending]=useState(true)


    useEffect(() => {

        if( localStorage.getItem("fav")==null )
        {
            localStorage.setItem("fav" , "[]")
        }
        setTimeout(() => {
            fetch(" http://localhost:4000/movies")
                .then((res) => { 
                    return res.json() })
                .then((data) => {
                    console.log(data);
                    setmovies(data)
                })
                .catch((err)=>{ seterror("404 Network issue !!! please try again later");
                               setpending(false);
                            });
        }, 3000)
    }, [])



    return (

        <div className="home">
           {pending==true && movies==null && <h1>Loading.....</h1>}
          { error && <h1>{error}</h1>}
         {movies &&
                <Movieslist movies={movies} title="All movies" />
           }
             {movies &&
                 <Movieslist movies={movies.filter((m) => { return m.genre.includes("action") })} title="Action movies" />
             }
             {movies &&
                 <Movieslist movies={movies.filter((m) => { return m.rating >= 8.5 })} title="Top rated movies" />
             }
             {movies &&
                <Movieslist movies={movies.filter((m) => { return m.moviename.startsWith("K") })} title="Search result for K" />
            } 
        </div>
    );
}

export default Home;
