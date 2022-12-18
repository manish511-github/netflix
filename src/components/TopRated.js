import { useEffect, useState } from "react";
import { getDatabase,ref, onValue } from "firebase/database";
import { useHistory } from "react-router-dom";
import axios from 'axios';



import { app } from "../firebase/firebase"
const db = getDatabase();

function TopRated(props) {
  const history = useHistory();
  const helper = (name) =>{ 
    
    history.push({pathname:'/movieData',
    search: '?query=abc',
    state:{detail:name}})
    
 
  }
  const [movies, setMovies] = useState([]);
const {title,id}=props;

 

  const leafRoot = "movies";



  // const fetchMovies = (movieType) => {
  //   const movieRef = ref(db,`${leafRoot}/${movieType}`);
  //   onValue(movieRef, (snapshot) => {
  //     const movies = snapshot.val();
  //     if (movies && movies.length !== 0) {
  //       setMovies(() => movies);
  //     }
  //   });
  // };
//   useEffect(() => {
//     fetchMovies()
// },[])



// const fetchMovies = async () => {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/list/28?api_key=6b36711bb57286aacc8d8ecba135534a&language=en-US`
//   );
//   const data = await response.json()

//   setMovies(data.items) // `results` from the tmdb docs
//   console.log(movies);
  
// }


const url =
// "https://api.themoviedb.org/3/movie/popular?api_key=19dedc791dc255982eaf84be8a93012a&language=en-US&page=1"
`https://api.themoviedb.org/3/movie/top_rated?api_key=6b36711bb57286aacc8d8ecba135534a&language=en-US&page=1

`;
useEffect(() => {
fetchPopular();
},[]);
const fetchPopular = async () => {
const data = await fetch(url);

const movie = await data.json();

setMovies(movie.results);
// console.log(movies);

};


 
    return (
      <div className="row">
       <h2>{title}</h2>

      <div className="row__posters">
    

        {movies.map((movie) => (
        
          <div>
           
          <img
            className="row__poster row__posterLarge"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.original_title} onClick={() => helper(movie)}
          
          />
          
          </div>
        ))}
      </div>
    </div>
    )


 


  


}

export default TopRated;