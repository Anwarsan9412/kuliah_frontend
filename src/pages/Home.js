// Import Navbar, Hero, Movies, Footer Component
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 */
function Home() {
  /**
   * Mengangkat stave movies: lifting state.
   * Dari Component Movies ke Component Home.
   * Agar bisa digunakan oleh Component yang lain.
   */

  return (
    <>
      <Hero />
      {/* Mengirim props: state movies */}
      <Movies title="Latest Movie" />
    </>
  );
}

export default Home;
