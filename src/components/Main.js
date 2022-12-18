import React from 'react'
import Nav from './Nav'
import "./main.css";
import img1 from "../assests/img1.png";

import img2 from "../assests/img2.png";
import img3 from "../assests/img3.png";


import { useHistory } from 'react-router-dom';

function Main() {
     
  const history = useHistory();
  
  const routeChange = () =>{ 
    let path = `./login`; 
    history.push(path);
  }
  return (
    <div>
       <Nav></Nav>
       <div className="body">
       <div className="description">
         <h1 className="bold">Unlimited movies, TV shows and more.</h1>
          <h2 className="des"> Watch anywhere. Cancel anytime.</h2>
        <h2 className="tag">
        Ready to watch? Sign In to watch.
        </h2>
       <center> <button className="login-body__submit-btnn"   onClick={routeChange} >
          Sign In
        </button>
        </center>
      
        </div>
       

       </div>

<hr />
       <div className="down">
        <div className="text">
        <h1 className="bold1">Enjoy on your TV.</h1>
          <h2 className="des1">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>

        </div>
        <div className="img1">
        <img className="display" src={img1} alt="Imagw okfkg" />

        </div>
       
          
      
      
          </div>
          <hr />
          <div className="down2">
          <div className="img1">
        <img className="display2" src={img2} alt="Imagw okfkg" />

        </div>
        <div className="text">
        <h1 className="bold1">Download your shows to watch offline.</h1>
          <h2 className="des1">Save your favourites easily and always have something to watch.</h2>

        </div>
     
        
       
          
      
      
          </div>
          <hr />

       <div className="down3">
        <div className="text">
        <h1 className="bold1">Watch everywhere.</h1>
          <h2 className="des1">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
</h2>

        </div>
        <div className="img">
        <img className="display3" src={img3} alt="Imagw okfkg" />

        </div>
       
          
      
      
          </div>
     
    </div>
  )
}

export default Main