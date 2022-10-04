import {useEffect, useState } from 'react';
import './App.css';
import Navigation from './Component/Navigation';
import MovieListe from './Component/MovieListe';
import {moviesData} from './Data';
import {Routes,route} from '/react-router-dom'
import Trailer from './Component/Tailer';





function App() {
const [movies , setMovies] = useState (moviesData)
const [name,setName] = useState ("")
const [value, setValue] =useState(0)

  return (
    <div className="App">
    
    <Navigation  setName={setName}  value={value} setValue={setValue}/>
    <Routes>
    <route path="/Home" element={<MovieListe movies={movies}/>}/>
    <route path="/:id" element={<Trailer movies={movies}/>}/> </Routes>
    <MovieListe movies={movies} name ={name} value={value}/>
   
    
    
    
      
    </div>
  );
}

export default App;
