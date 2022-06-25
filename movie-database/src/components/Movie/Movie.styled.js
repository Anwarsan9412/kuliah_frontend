import styled from "styled-components";

const StyledMovie = styled.div`
  /* small */
  div {
    margin-bottom: 1rem;
  }
  img {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
  h3 {
    color: #4361ee;
    font-size: 1.95rem;
    margin-bottom: 0.5rem;
  }
  p {
    color: #64748b;
  }
  div > a {
    margin-bottom: 1rem;
    font-size: 1rem;
    color: white;
    cursor: pointer;
    text-decoration: none;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    div {
      padding: 1rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    div {
      padding: 1rem;
    }
  }
`;
export default StyledMovie;
