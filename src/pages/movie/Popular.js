import axios from "axios";
import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovie } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoint";
import { useDispatch } from "react-redux";

const PopularMovie = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    getPopulerMovies();
  }, []);

  async function getPopulerMovies() {
    // Fetch data daro axios
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
