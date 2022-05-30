import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function NowPlayingMovie() {
  const [movies, setMovies] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

  useEffect(async () => {
    getNowPlayingMovies();
  }, []);

  async function getNowPlayingMovies() {
    const response = await axios(URL);
    setMovies(response.data.results);
  }
  return (
    <>
      <Hero />
      <Movies movies={movies} />
    </>
  );
}

export default NowPlayingMovie;
