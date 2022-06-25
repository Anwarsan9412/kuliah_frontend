import { nanoid } from "nanoid";
import StyledAddMovie from "./AddMovie.styled";
import Button from "../ui/Button";
import Hero from "../Hero";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../Alert/Alert";
import { useDispatch } from "react-redux";
import { addMovie } from "../../features/moviesSlice";

const AddMovieForm = (props) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    poster: "",
    type: "",
  });

  /**
   * TODO
   * - PROBLEM: 1 ERROR 1 STATE.
   * - TODO: REFACTOR SEMUA ERROR JADI 1 STATE.
   */
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isPosterError, setIsPosterError] = useState(false);

  function handleChange(e) {
    // Destructing name dan value.
    const { name, value } = e.target;

    /**
     * Mengupdate state berupa object:
     * - Menggunakan spread operator:
     * - Update property berdasarkan apapun nilai name.
     */
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validate() {
    if (title === "") {
      setIsTitleError(true);
      return false;
    } else if (date === "") {
      setIsDateError(true);
      setIsTitleError(false);
      return false;
    } else if (poster === "") {
      setIsPosterError(true);
      setIsDateError(false);
      return false;
    } else {
      setIsTitleError(false);
      setIsDateError(false);
      return true;
    }
  }

  function submitMovie() {
    const movie = {
      id: nanoid(),
      title: title,
      year: date,
      type: type,
      poster: poster,
    };

    // SOLVED: HOW TO ADD MOVIE TO MOVIES :)
    // setMovies([...movies, movie]);
    dispatch(addMovie(movie));
    navigation("/");
  }

  function handleSubmit(e) {
    e.preventDefault();

    validate() && submitMovie();
  }

  const { title, date, poster, type } = formData;

  return (
    <StyledAddMovie>
      <div>
        <section>
          <div>
            <img src="https://picsum.photos/536/354" alt="" />
          </div>
          <div>
            <h2>Add Movie Form</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  type="text"
                  name="title"
                  // Memberikan value input: title
                  value={title}
                  // Memberikan event onChange
                  onChange={handleChange}
                />
                {/*
                 * Menambahkan infline if: operator &&
                 * Jika isTitleError true maka render error
                 */}
                {isTitleError && <Alert>Title Wajib Diisi</Alert>}
              </div>
              <div>
                <label htmlFor="date">Date</label>
                <input
                  id="date"
                  type="text"
                  name="date"
                  // Memberikan value input: date
                  value={date}
                  // Memberikan event onChange
                  onChange={handleChange}
                />
                {/*
                 * Menambahkan infline if: operator &&
                 * Jika isDateError true maka render error
                 */}
                {isDateError && <Alert>Date Wajib Diisi</Alert>}
              </div>
              <div>
                <label htmlFor="poster">Poster</label>
                <input
                  onChange={handleChange}
                  id="poster"
                  name="poster"
                  type="text"
                  value={poster}
                />
                {isPosterError && <Alert>Poster Wajib Diisi</Alert>}
              </div>
              <div>
                <label htmlFor="type">Type</label>
                <select
                  name="type"
                  id="type"
                  onChange={handleChange}
                  defaultValue={"default"}
                >
                  <option value={"default"} disabled>
                    -- Choice --
                  </option>
                  <option value="Action">Action</option>
                  <option value="Drama">Drama</option>
                  <option value="Horor">Horor</option>
                </select>
              </div>
              <div>
                <Button full>Add Movie</Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </StyledAddMovie>
  );
};

export default AddMovieForm;
