import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Addmovies = () => {

  let navigate = useNavigate()
  let moviename = useRef()
  let hero = useRef();
  let heroine = useRef();
  let director = useRef();
  let genre = useRef();
  let yor = useRef();
  let rating = useRef();
  let poster = useRef();
  let trailer = useRef();
  let synopsis = useRef();


  let handleAddMovie = (e) => {
    e.preventDefault()
    let newMovie = {
      moviename: moviename.current.value,
      hero: hero.current.value,
      heroine: heroine.current.value,
      director: director.current.value,
    languages:[],
      genre: genre.current.value,
      poster: poster.current.value,
      trailer: trailer.current.value,
      release: yor.current.value,
      rating: rating.current.value,
      synopsis: synopsis.current.value
    };
    console.log(newMovie);
    let options = document.getElementsByName("lang");
    for (let i = 0; i < options.length; i++) {
      if (options[i].checked == true) {
        newMovie.languages.push(options[i].value)
      }
    }
    fetch("http://localhost:4000/movies",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMovie)
      }
    )
      .then(() => {
        alert("new data added");
        navigate("/");
      })

  }


  return (<div className="Addmovies-detail">
            <h1 id="title">Add movies</h1>
            <form className="form" onSubmit={handleAddMovie}>
              <input type="text" placeholder=" movie " required ref={moviename} />
              <input type="text" placeholder="hero " required ref={hero} />
              <input type="text" placeholder="heroine " required ref={heroine} />
              <input type="text" placeholder="director" required ref={director} />

              <fieldset>
                <legend id="languages">languages</legend>
                <input type="checkbox" name="lang" value="kannada" /><label >Kannada</label>
                <input type="checkbox" name="lang" value="tamil" /><label >Tamil</label>
                <input type="checkbox" name="lang" value="telugu" /><label >Telugu</label>
                <input type="checkbox" name="lang" value="malayalam" /><label >Malayalam</label>
                <input type="checkbox" name="lang" value="hindi" /><label >Hindi</label>
              </fieldset>

              <input type="text" placeholder="genre" required ref={genre} />
              <input type="url" placeholder="poster link" required ref={poster} />
              <input type="url" placeholder="trailer link" required ref={trailer} />
              <input type="number" placeholder="release" required ref={yor} min="1950" max="2024" />
              <input type="number" placeholder="rating" required ref={rating} max="10" min="1" step="0.1" />
              <textarea name="synopsis" ref={synopsis} cols="100" rows="10"></textarea>
              <button type="submit" > submit</button> 
            </form>
          </div>


  );
}

export default Addmovies;