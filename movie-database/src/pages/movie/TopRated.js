import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import Movies from "../../components/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../features/moviesSlice";

function TopRatedMovie() {
  const dispatch = useDispatch();

  useEffect(async () => {
    getTopRateMovies();
  }, []);

  async function getTopRateMovies() {
    const response = await axios(ENDPOINTS.TOPRATED);
    dispatch(updateMovie(response.data.results));
  }

  return (
    <>
      <Hero />
      <Movies title="Top Rated" />
    </>
  );
}

export default TopRatedMovie;
