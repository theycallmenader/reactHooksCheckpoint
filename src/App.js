import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Filter from './Component/FilterRate'

import MovieList from './Component/MovieList.js'
import AddMovie from './Component/AddMovie.js'

function App() {

  const MovieData = [
    
    
    {
      title:"Game of Thrones",
    description:"Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia ",
    posterURL:"https://celebrity.fm/wp-content/uploads/2020/08/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
    rate:5
    },
    
    
    {title:"Breaking Bad",
    description:"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future",
    posterURL:"https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
    rate:5},

    {title:"Sherlock",
    description:"A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
    posterURL:"https://fr.web.img5.acsta.net/pictures/18/11/05/18/04/4981046.jpg",
    rate:2},

    {title:"Death Note",
    description:"An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
    posterURL:"https://fr.web.img5.acsta.net/pictures/18/01/18/14/35/2024405.jpg",
    rate:4},

    {
      title: "Peaky Blinders",
      description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby",
      posterURL: "https://fr.web.img6.acsta.net/pictures/210/457/21045721_20131001172258551.jpg",
      rate:5
    }

  ];
  const [movies, setMovies] = useState(MovieData);
  const [search, setSearch] = useState('');
  

  const searching = (s) => {
    setSearch(s)
  }


  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie])
  }

  return (
    <div >
      <h1 className='AppTitle'>Movie App</h1>
      <div className='nav'>
        
        <Filter
        
          title={searching} 
        />
      </div>
      <div className='movie-list'> 
        <AddMovie handleAddMovie={handleAddMovie} />
      </div>
      <div class="movie-app">
        <MovieList
          movies={movies.filter((elm) => (elm.title.toLowerCase().match(search.toLowerCase().trim())))} />
      </div>

    </div >
  );
}

export default App;