import styled, { css } from "styled-components";

const Text = styled.p`
    ${(props) =>
    props.lg &&
    css`
      font-size: 1.3rem; 
      padding: 0.5rem 1rem;
    `
    ||
    props.sm &&
    css`
        font-size: 0.8rem;
        padding: 0.2rem 0.5rem;
    `
    ||
    css`
        font-size: 1rem;
        padding: 0.5rem 1rem;
    `
    }
`;

export default Text;