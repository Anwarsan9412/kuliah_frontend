import styled from "styled-components";

const StyledMovies = styled.div`
  /* small */
  margin: 5rem auto;
  section {
    text-align: center;
  }
  h2 {
    margin-bottom: 1rem;
    font-size: 2.44rem;
    color: #4361ee;
  }
  div:nth-child(2) {
    display: flex;
    flex-direction: column;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    div:nth-child(2) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
  }
`;
export default StyledMovies;
