import StyledContainer from "./Container.styled";

/**
 * Membuat Component Container.
 * Menggunakan Teknik Composition: children.
 */
function Container({ children }) {
  return (
    <StyledContainer>
      <div>{children}</div>
    </StyledContainer>
  );
}

export default Container;
