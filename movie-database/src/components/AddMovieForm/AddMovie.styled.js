import styled from "styled-components";

const StyledAddMovie = styled.div`
  /* small */

  margin: 0rem 1rem;
  section {
    display: flex;
    flex-direction: column;
    margin: 1rem 1rem;
  }
  section > div:nth-child(1) {
    margin-bottom: 0rem;
  }
  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
    margin: 1rem 0;
  }

  h2 {
    font-size: 1.5rem;
    color: #4361ee;
    text-align: center;
    border-bottom: 4rem;
  }
  form {
    margin-top: 0rem;
  }
  form > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    margin-bottom: 0rem;
  }
  form > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    margin-bottom: 0rem;
  }
  label {
    display: block;
    margin: 1rem 0;
  }
  select {
    outline: none;
    padding: 0.8rem 0.3rem;
    border-radius: 10px;
    /* border: 1px solid #4361ee; */
    cursor: pointer;
    display: inline-block;
    position: relative;
    color: black;
  }
  input {
    outline: none;
    padding: 0.6rem 0.3rem;
    border-radius: 10px;
    border: 1px solid #4361ee;
    display: inline-block;
    position: relative;
    font: normal 11px/22px Arial, Sans-Serif;
    color: black;
    width: 100%;
  }
  select {
    outline: none;
    padding: 0.8rem 0.3rem;
    border-radius: 10px;
    border: 1px solid #4361ee;
    cursor: pointer;
    display: inline-block;
    position: relative;
    color: black;
    width: 100%;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    section {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    section > div:nth-child(1) {
      flex-basis: 50%;
      margin: auto 0rem;
      justify-content: left;
      display: block;
    }
    section > div:nth-child(2) {
      flex-basis: 40%;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
  }
`;
export default StyledAddMovie;
