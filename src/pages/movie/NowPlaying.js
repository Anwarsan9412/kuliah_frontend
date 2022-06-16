import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../features/moviesSlice";

function NowPlayingMovie() {
  const dispatch = useDispatch();

  useEffect(async () => {
    getNowPlayingMovies();
  }, []);

  async function getNowPlayingMovies() {
    const response = await axios(ENDPOINTS.NOWPLAYING);
    dispatch(updateMovie(response.data.results));
  }
  return (
    <>
      <Hero />
      <Movies title="Now Playing" />
    </>
  );
}

export default NowPlayingMovie;
