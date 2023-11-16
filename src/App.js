import { useState } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import './App.css';


function App() {
  const [movie, setMovie] = useState([{
    title: "Avatar",
    type: "Action | Fantansy | Adventure",
    description: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
    rating: 7.6,
    posterURL: '/image/avatar.jpeg'
  },
  {
    title: "65",
    type: "Action | Adventure | Drama",
    description: "An astronaut crash lands on a mysterious planet only to discover he's not alone.",
    rating: 5.4,
    posterURL: '/image/adam.jpg'
  },
  {
    title: "Wish",
    type: "Animation | Adventure | Comedy",
    description: "Wish will follow a young girl named Asha who wishes on a star and gets a more direct answer than she bargained for when a trouble-making star comes down from the sky to join her.",
    rating: 4.5,
    posterURL: '/image/wish.jpeg'
  },
  {
    title: "All the Light We Cannot See",
    type: "Drama | History | War",
    description: "The story of Marie-Laure, a blind French teenager, and Werner, a German soldier, whose paths collide in occupied France as both try to survive the devastation of World War II.",
    rating: 7.7,
    posterURL: '/image/light.jpg'
  },
  {
    title: "Invincible",
    type: "Animation | Action | Adventure",
    description: "An adult animated series based on the Skybound/Image comic about a teenager whose father is the most powerful superhero on the planet.",
    rating: 8.7,
    posterURL: '/image/invicible.jpg'
  },
  {
    title: "Priscilla",
    type: "Biography | Drama | Music",
    description: "When teenage Priscilla Beaulieu meets Elvis Presley, the man who is already a meteoric rock-and-roll superstar becomes someone entirely unexpected in private moments: a thrilling crush, an ally in loneliness, a vulnerable best friend.",
    rating: 7.1,
    posterURL: '/image/priscilia.jpg'
  },
  {
    title: "All Dirt Roads Taste of Salt",
    type: "Drama",
    description: "A decades-spanning exploration of a woman's life in Mississippi and an ode to the generations of people, places, and ineffable moments that shape us.",
    rating: 6,
    posterURL: '/image/dirt.jpg'
  },
  {
    title: "The Marsh King's Daughter",
    type: "Crime | Drama | Mystery",
    description: "A woman seeks revenge against the man who kidnapped her mother.",
    rating: 6.3,
    posterURL: '/image/mash.jpg'
  },
]);

const [open, setOpen] = useState(false) 

const [input, setInput] = useState({title: "", rating: ""})

const handleFilterInput = (filterType, filterValue) => {
    setInput({...input, [filterType]:filterValue})
}
//the above function is to handle is to filter the input by Title and Rating

const filterMovie = movie.filter( items => items.title.toLowerCase().includes(input.title.toLowerCase()) && items.rating.toString().includes(input.rating))

//the below function is to handle the add Movie Form

const addNewMovie = (newMovie) => {
    setMovie( prev => ([...prev, newMovie]));
}

// the below function toggles the state of the click to add movie container at the top right of the header section

const addMoviedropDownBtn = () => {
  (setOpen(!open))
}

  return (
    <div className="App">
      <Header prop={<Filter filterinput={handleFilterInput}/>} movieDropDownBtn={addMoviedropDownBtn}/>
      <MovieList movies={filterMovie} />
      <div className={`add-movie-container ${open ? 'active' : 'inactive'}`}>
        <AddMovie addMovie={addNewMovie} />
      </div>
    </div>
  );
}

//The Filter component is passed as a props to the Header Component for styling purpose

export default App;
