import React from "react";
import { BrowserRouter , Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Main from "./components/Main";
import MovieData from "./components/MovieData"
function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" component={Main} exact/>

    <Route path="/home" component={Home} exact/>
    <Route path="/login" component={Login} exact/>
    <Route path="/movieData" component={MovieData} exact/>

     
    
    </Switch>
  </BrowserRouter>
   
  );
}

export default App;
