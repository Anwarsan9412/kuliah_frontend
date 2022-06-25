import StyledNavbar from "./Navbar.styled";
import { Link } from "react-router-dom";

function Navbar() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <StyledNavbar>
      <div>
        <div>
          <div>
            <h2>Covid ID</h2>
          </div>
          <div>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/movie/create">Add Movie</Link>
              <Link to="/movie/popular">Popular</Link>
              <Link to="/movie/now">Now Playing</Link>
              <Link to="/movie/top">Top Rated</Link>
            </ul>
          </div>
        </div>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
