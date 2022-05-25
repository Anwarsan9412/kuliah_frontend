/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */
import StyledNavbar from "./Footer.styled"



function Footer() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <StyledNavbar>
    <div>
      <footer>
        <h2>Movie App</h2>
        <p>Created by aufaroot18</p>
      </footer>
    </div>
    </StyledNavbar>
  );
}

export default Footer;
