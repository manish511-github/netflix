
import Nav from "./Nav"
import Header from './Header';
import Row from './Row';
import Popular from "./Popular";
import TopRated from "./TopRated";

function Home() {
    
  return (
    <div className="app">
      <Nav/>
      <Header/>
      {/* <Row title="Netflix Originals" id="netflix-originals" />    
      <Row title="Trending Now" id="trending-now" />
      <Row title="Top Rated" id="top-rated" /> */}
        {/* <Row title="Popular" id="ls" /> */}
        <Popular title="Popular"  />
        <TopRated title="Top Rated"/>
      <Row title="Action" id="28" />
      <Row title="Thriller" id="53" />
    
      <Row title="Comedy" id="35" />
      <Row title="Crime" id="80" />
      <Row title="Documentary" id="99" />
   
      <Row title="Fantasy" id="14" />
      <Row title="History" id="36" />
      <Row title="Horror" id="27" />
      <Row title="Mystery" id="9648" />
      <Row title="Science Fiction" id="878" />
      
      <Row title="Music" id="104" />
      {/* <Row title="Horror Movies" id="horror-movies" />
      <Row title="Romance Movies" id="romance-movies" />
      <Row title="Documentaries Movies" id="documentaries-movies" /> */}
      
        </div>

   
  );
}

export default Home;