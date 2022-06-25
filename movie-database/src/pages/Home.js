// Import Navbar, Hero, Movies, Footer Component
import Hero from "../components/Hero/";
import Movies from "../components/Movies";

function Home() {
  return (
    <>
      <Hero />
      <Movies title="Latest Movie" />
    </>
  );
}

export default Home;
