import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  margin: 2rem 0 auto;
  text-decoration: none;

  // PROPS VARIANT
  background-color: ${(props) =>
    props.theme.colors[props.variant] || props.theme.colors["primary"]};

  padding: ${(props) =>
    props.theme.padding[props.padding] || props.theme.colors["md"]};

  // PROPS FULL
  ${({ full }) =>
    full &&
    css`
      display: block;
      width: 100%;
    `}

  // PROPS SIZE
  font-size: ${({ size, theme }) =>
    theme.fontSize[size] || theme.fontSize["md"]};
  padding: ${({ size, theme }) => theme.padding[size || theme.padding["md"]]};
`;

export default Button;
