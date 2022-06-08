import axios from "axios";
import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";

const PopularMovie = () => {
  const [movies, setMovies] = useState([]);
  useEffect(async () => {
    getPopulerMovies();
  }, []);

  async function getPopulerMovies() {
    // Fetch data daro axios
    const response = await axios(ENDPOINTS.POPULAR);
    // console.log(response.data.results);
    setMovies(response.data.results);
  }

  return (
    <>
      <Hero />
      <Movies title="Popular Movies" movies={movies} />
    </>
  );
};

export default PopularMovie;
