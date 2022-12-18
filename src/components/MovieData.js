import React from 'react'
import { useEffect ,useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import ModalVideo from 'react-modal-video'
import Nav from './Nav';
import { useHistory } from "react-router-dom";
import "react-modal-video/scss/modal-video.scss";
import "./movieData.css";

function MovieData() {
  const history = useHistory();
  const helper = (name) =>{ 
    
    history.push({pathname:'/movieData',
    search: '?query=abc',
    state:{detail:name}})
    window.location.reload(false);
    
 
  }
  const [isOpen, setOpen] = useState(false)
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  const [video,setVideo] = useState([]);
  const [details,setdetails] = useState([]);
  const [id, setid] = useState(0);
  const [adult, setadult] = useState(false);
  const [genre,setgenre] = useState([]);
  const [cast,setcast] = useState([]);
  const [lang,setlang]=useState([]);
  const [similar,setsimilar]=useState([]);

  const [upcoming,setupcoming]=useState([]);


  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  const location = useLocation();
  
//   useEffect(() => {
//     console.log(location.pathname); // result: '/secondpage'
//     console.log(location.search); // result: '?query=abc'
//     console.log(location.state.detail); // result: 'some_value'
//  }, [location]);


const url =
// "https://api.themoviedb.org/3/movie/popular?api_key=19dedc791dc255982eaf84be8a93012a&language=en-US&page=1"
`https://api.themoviedb.org/3/movie/${location.state.detail.id}/videos?api_key=6b36711bb57286aacc8d8ecba135534a&language=en-US
`;
const url2=`https://api.themoviedb.org/3/movie/${location.state.detail.id}?api_key=6b36711bb57286aacc8d8ecba135534a&language=en-US`;
const url3=`https://api.themoviedb.org/3/movie/${location.state.detail.id}/credits?api_key=6b36711bb57286aacc8d8ecba135534a&language=en-US`;
const url4=`https://api.themoviedb.org/3/movie/${location.state.detail.id}/similar?api_key=6b36711bb57286aacc8d8ecba135534a&language=en-US`;
const url5=`https://api.themoviedb.org/3/movie/upcoming?api_key=6b36711bb57286aacc8d8ecba135534a&language=en-US`;


useEffect(() => {
fetchVideo();


},[]);
useEffect(() => {
  fetchDetails();
  
  
  },[]);
  useEffect(() => {
    fetchCast();
    
    
    },[]);
    
    useEffect(() => {
      fetchsimilar();
      
      
      },[]);
      useEffect(() => {
        fetchupcoming();
        
        
        },[]);
const fetchVideo = async () => {
const data = await fetch(url);

const movie = await data.json();

setVideo(movie.results);
console.log(video);

};
const fetchDetails = async () => {
  const data1 = await fetch(url2);

  const movie1 = await data1.json();
  setdetails(movie1);
  setadult(movie1.adult);
  setgenre(movie1.genres);
  setlang(movie1.spoken_languages);

  console.log(details);
  console.log(genre);

  
  
  };


  const fetchCast = async () => {
    const data2 = await fetch(url3);
  console.log(data2);
    const movie2 = await data2.json();
    
    setcast(movie2.cast);

    console.log(cast);

    
    
    };
    const fetchsimilar = async () => {
      const data4 = await fetch(url4);
   
      const movie4 = await data4.json();
      
      setsimilar(movie4.results);
      console.log(similar);
  
 
  
      
      
      };
      const fetchupcoming = async () => {
        const data5 = await fetch(url5);
     
        const movie5 = await data5.json();
        
        setupcoming(movie5.results);
     
    
   
    
        
        
        };
  


  return (
  <div>
<Nav/>
<div className="upper">

<div className="poster" >
<img  className="pster"    src={`https://image.tmdb.org/t/p/original/${location.state.detail.backdrop_path}`} alt="" />
<div className="poster-text">
<h1> {details.title}</h1> 
<div className="info">
  <h4>&nbsp; {details.release_date} |&nbsp; </h4>
 

  <h4 className="bor"> {(details.adult)?'18+':'U/A 16+'}</h4>

  <h4><span>&nbsp;</span> | {details.runtime} min </h4>
</div>
<div className="overview">
{location.state.detail.overview}
</div>


</div>
</div>


  
</div>


<div className="video">
<div className="video-text">
  <div className="text1" >
  Videos | &nbsp;</div>
  <div className="text2" >
  {details.title} </div></div>
<div className="row_posters">

         <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={id}
        onClose={() => setOpen(false)}
      />
        
        

{video.map((movie) => (
        
        <div>
 
        <img
          className="row_poster row_posterLarge"
          src={` https://img.youtube.com/vi/${movie.key}/maxresdefault.jpg
          `}
          alt={movie.name} onClick={() => {setid(movie.key);setOpen(true)}}
        
        /> 
        <div className="title-movie">{movie.name}</div> 
      
       

        </div>
      ))}
        
</div>


</div>
<div className="rule">
<hr></hr>
</div>

<div className="more-details">
<div className="text1 ">More Details
<div className="fley">
<div className="text2">Language 
<div className="gen" > 
{lang.map((value,index)=>{
  return(
    <div className="text3">
      {value.name},&nbsp;
    </div>
  )
})
}


</div>

</div>
<div className="text2">Genres
<div  className="gen">
{genre.map((value,index)=>{
  return(
    <div className="text3">
      {value.name}, &nbsp;
    </div>
  )
})
}

</div>




</div>

</div>
</div>

<div className="text2 cast">Cast
</div>

<div className="parent-flex2">
{cast.slice(0,15).map((value,index)=>{
  return(
    <div className="flex-item2">
      {value.name}
    </div>
  )
})
}
</div>
<hr />












</div>

<div className="video">
<div className="video-text">
  <div className="text1" >
    
  More Like This</div>
  </div>
<div className="parent-flex">
{similar.slice(0,18).map((movie,index)=>{
  return(
    <div>
      
       <img
            className="flex-item"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.original_title} onClick={() => helper(movie)}
          
          />
   
    </div>
  )
})
}

       
        

       
        
</div>


</div>
       
<div className="video">
<div className="video-text">
  <div className="text1" >
 Coming Soon</div>
  </div>
<div className="parent-flex1">
{upcoming.slice(0,8).map((movie,index)=>{
  return(
    <div>
      
       <div
            className="flex-item1"
           
          
          >
            <div className="text6">
             { movie.original_title}
            </div>
            <div className="text3">
              {movie.overview}
            </div>
            
            </div>
   
    </div>
  )
})
}

       
        

       
        
</div>


</div>
       

</div>
  )
}

export default MovieData