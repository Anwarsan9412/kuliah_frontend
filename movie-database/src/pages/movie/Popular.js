import axios from "axios";
import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import Movies from "../../components/Movies";
import { updateMovie } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoint";
import { useDispatch, useSelector } from "react-redux";

const PopularMovie = () => {
  // const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(async () => {
    getPopulerMovies();
  }, []);

  async function getPopulerMovies() {
    const response = await axios(ENDPOINTS.POPULAR);
    dispatch(updateMovie(response.data.results));
  }

  return (
    <>
      <Hero />
      <Movies title="Popular Movies" />
    </>
  );
};

export default PopularMovie;
