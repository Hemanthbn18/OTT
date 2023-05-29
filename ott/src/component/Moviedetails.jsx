import { useEffect, useState } from "react";
import { Link, useNavigate, useParams, } from "react-router-dom";
import Releventmovies from "./Releventmovies";
import Addmovies from "./Addmovies";

const Moviedetails = () => {
     let navigate=useNavigate();
    let { id } = useParams();
    let [movie, setmovie] = useState(null);
    let [error, seterror] = useState(null);
    let [pending, setpending] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            fetch(" http://localhost:4000/movies/"+id )
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    console.log(data);
                    setmovie(data)
                })
                .catch((err) => {
                    seterror("404 Network issue !!! please try again later");
                    setpending(false);
                });
        }, 3000)
    }, [])
   let Deletemovie=()=>{
    fetch(" http://localhost:4000/movies/"+id,{method:"DELETE"})
    .then(()=>{navigate("/")})
   }


    return (<div className="Heading">

        <h1 id="heading1">Movie Details Component</h1>
        {/* <h1>{id}</h1> */}
        {pending == true && movie == null && <h1>Loading.....</h1>}
        {error && <h1>{error}</h1>}
        {movie && <div className="movie-details1">
             
                    <img src={movie.poster} alt="" />
                    <h1>Movie: {movie.moviename}</h1>
                    <h1>Hero: {movie.hero}</h1>
                    <h1>Languages: {movie.languages.join(" , ")}</h1>
                    <h1>Genre: {movie.genre}</h1>
                    <p><h1>Synopsis: </h1> {movie.synopsis}</p>
            
                    <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>

                    <button onClick={Deletemovie}>Delete Movie</button>
                    <Link  to={`/edit/${movie.id}`} ><button>Update</button></Link>
        </div>}
{  movie &&   <Releventmovies  genre={movie.genre}   />}
    </div>);
}

export default Moviedetails;