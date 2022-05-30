import axios from "axios";
import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

const PopularMovie = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  const [movies, setMovies] = useState([]);
  useEffect(async () => {
    getPopulerMovies();
  }, []);

  async function getPopulerMovies() {
    // Fetch data daro axios
    const response = await axios(URL);
    // console.log(response.data.results);
    setMovies(response.data.results);
  }

  return (
    <>
      <Hero />
      <Movies movies={movies} />
    </>
  );
};

export default PopularMovie;
