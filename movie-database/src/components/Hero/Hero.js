/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./Hero.module.css";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import axios from "axios";

function Hero() {
  // Membuat State movie
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer =
    movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  useEffect(getDetailMovie, []);

  async function getTrendingMovies() {
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios(URL);
    return response.data.results[0];
  }

  async function getDetailMovie() {
    const trendingMovie = await getTrendingMovies();
    const id = trendingMovie.id;

    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;

    // https://api.themoviedb.org/3/movie/{movie_id}?api_key=8c21b8c062a21188b7d0d71069a68e80&append_to_response=videos
    const response = await axios(URL);
    setMovie(response.data);
  }

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>{movie.title}</h2>
          <h3 className={styles.hero__genre}>Genre: {genres}</h3>
          <p className={styles.hero__description}>{movie.overview}</p>
          <Button as="a" href={trailer} target="_blank">
            Watch
          </Button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
