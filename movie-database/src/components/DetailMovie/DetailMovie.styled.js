import styled from "styled-components";

const StyledDetailMovie = styled.div`
  * {
    margin-bottom: 1rem;
  }

  /* small screen */
  margin: 1rem auto;
  padding: 1rem;
  section {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  h2 {
    color: #4361ee;
    font-size: 1.5rem;
  }
  h3 {
    color: #b5179e;
    font-size: 1.5rem;
  }
  p:nth-child(2) {
    margin-bottom: 1rem;
    color: #2196f3;
    font-size: 1rem;
  }
  p:nth-child(3) {
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  div:nth-child(0) {
    flex-basis: 50%;
  }
  div:nth-child(2) {
    flex-basis: 60%;
    text-align: left;
  }

  img {
    /* visibility: hidden; */
    display: none;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    img {
      max-width: 100%;
      height: auto;
      border-radius: 25px;
      display: block;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
    div > section {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }

    img {
      max-width: 100%;
      height: auto;
      border-radius: 25px;
      display: block;
    }
  }
`;

export default StyledDetailMovie;
