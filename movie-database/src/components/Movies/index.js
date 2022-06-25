import { useSelector } from "react-redux";
import Movie from "../Movie";
import StyledMovies from "./Movies.styled";

function Movies({ title }) {
  const movies = useSelector((store) => store.movies.movies);

  return (
    <StyledMovies>
      <div>
        <section>
          <h2>{title}</h2>
          <div>
            {movies &&
              movies.map((movie) => {
                return <Movie key={movie.id} movie={movie} />;
              })}
          </div>
        </section>
      </div>
    </StyledMovies>
  );
}

export default Movies;
