/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./Hero.module.css";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import axios from "axios";
import StyledHero from "./Hero.styled";
import ENDPOINTS from "../../utils/constants/endpoint";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../features/moviesSlice";
import { useSelector } from "react-redux";

function Hero() {
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer =
    movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  useEffect(() => {
    getDetailMovie();
  }, []);

  async function getTrendingMovies() {
    // const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=8c21b8c062a21188b7d0d71069a68e80`;
    const response = await axios(ENDPOINTS.TRENDING);
    return response.data.results[0];
  }

  async function getDetailMovie() {
    const trendingMovie = await getTrendingMovies();
    const id = trendingMovie.id;
    // const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=8c21b8c062a21188b7d0d71069a68e80&append_to_response=videos`;
    const response = await axios(ENDPOINTS.DETAIL(id));
    setMovie(response.data);
  }

  return (
    <StyledHero>
      <div>
        <section>
          <div>
            <h2>{movie.title}</h2>
            <h3>Genre: {genres}</h3>
            <p>{movie.overview}</p>
            <Button as="a" href={trailer} target="_blank">
              Watch
            </Button>
          </div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt="placeholder"
            />
          </div>
        </section>
      </div>
    </StyledHero>
  );
}

export default Hero;
