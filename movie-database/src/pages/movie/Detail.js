import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

const Detail = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    getRecommendationMovies();
  }, [id]);

  async function getRecommendationMovies() {
    const URL = `${ENDPOINTS.RECOMMENDATIONS(id)}`;
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
