import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../features/moviesSlice";

const Detail = () => {
  // Simpan movies (state), id (params), API_KEY ke variable
  const dispatch = useDispatch();

  const { id } = useParams();
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    getRecommendationMovies();
  }, [id]);

  async function getRecommendationMovies() {
    const URL = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`;
    // const URL = `https://api.themoviedb.org/3/movie/tt10872600?api_key=8c21b8c062a21188b7d0d71069a68e80`;
    const response = await axios(URL);
    dispatch(updateMovie(response.data.results));
  }

  return (
    <>
      <DetailMovie />
      <Movies title="Recommendation Movies" />
    </>
  );
};

export default Detail;
