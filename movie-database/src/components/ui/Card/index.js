import styled, { css } from "styled-components";

const Card = styled.div`
  background-color: white;
  height: auto;
  border-radius: 10px;
  max-width: 100%;
  font-size: 2rem;

  color: ${(props) => props.theme.colors[props.Confirmed]};

  ${({ Confirmed }) =>
    Confirmed &&
    css`
      color: red;
    `}
`;
export default Card;
