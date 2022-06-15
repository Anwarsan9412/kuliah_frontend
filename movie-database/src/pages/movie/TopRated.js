import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";

function TopRatedMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    getTopRateMovies();
  }, []);

  async function getTopRateMovies() {
    const response = await axios(ENDPOINTS.TOPRATED);
    setMovies(response.data.results);
  }

  return (
    <>
      <Hero />
      <Movies title="Top Rated" movies={movies} />
    </>
  );
}

export default TopRatedMovie;
