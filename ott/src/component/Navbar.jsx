import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
     let [search, setsearch]=useState("")
    return (
        <nav>

            <div id="logo">
                <Link to="/">   <h1>Movies 🕷</h1> </Link>
            </div>

            <div id="search-bar">
                <input type="search"  placeholder="search for movies"  value={search}
                onChange={(e)=>{setsearch(e.target.value)}}/>
                <Link to={`/search/${search}`}>
                    <button >search</button>
                </Link>
            </div>

            <div id="fav-movie">
                <Link to="/fav">Favorite movies</Link>
            </div>

            <div id="add-movies">
                <Link to="/add"> Add Movies</Link>
            </div>

        </nav>
    );
}

export default Navbar;