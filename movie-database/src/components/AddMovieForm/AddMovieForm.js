import React from 'react';
import styles from "./AddMovieForm.module.css";

const AddMovieForm = () => {
  return (
    <div className={styles.container}>
      <section className={styles.forms}>
        <div className={styles.forms__left}>
        <img
            className={styles.forms__image}
            src="https://picsum.photos/536/354"
            alt="placeholder"
          />
        </div>
        
        <div className={styles.forms__right}>
        <h2 className={styles.forms__title}>Add Movie</h2>
            <form>
                <label>Title</label>
                <input type="text" name="title" className={styles.form__title}  />
        
                <label>Year</label>
                <input type="text" name="year" className={styles.form__title} />
        
                <input type="submit" className={styles.form__submit} value="Submit" /> 
            </form>
        </div>
      </section>
    </div>
  )
}

export default AddMovieForm ;