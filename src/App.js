import "./App.css";
import requests from "./requests";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending now" fetchURL={requests.fetchTrending} />
      <Row title="Top rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Romance movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Horror movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
