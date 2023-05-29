import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Addmovies from './component/Addmovies';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Moviedetails from './component/Moviedetails';
import Favorites from './component/Favorites';
import Search from './component/Search';
import Editmovie from './component/Editmovie';



function App() {
  return (


    <BrowserRouter>

      <div className='App'>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<Addmovies />} />
          <Route path='/details/:id' element={<Moviedetails/>} />
          <Route path='/fav' element={<Favorites/>}></Route>
          <Route path='/search/:search' element={<Search/>}/>
          <Route path='/edit/:id' element={<Editmovie/>}/>

        </Routes>


      </div>

    </BrowserRouter>

  );
}

export default App;
