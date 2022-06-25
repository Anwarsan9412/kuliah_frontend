import React from "react";
import StyledMovie from "./Movie.styled";
import { Link } from "react-router-dom";

const Movie = (props) => {
  const { movie } = props;

  return (
    <StyledMovie>
      <div>
        <img
          src={
            movie.poster ||
            `https://image.tmdb.org/t/p/w300/${movie && movie.poster_path}`
          }
          alt={movie.title}
        />
        <Link to={`/movie/${movie.id}`}>
          <h3>{movie.title}</h3>
        </Link>
        <p>{movie.year || movie.release_date} </p>
        <p>{movie.type || movie.media_type}</p>
      </div>
    </StyledMovie>
  );
};

export default Movie;
