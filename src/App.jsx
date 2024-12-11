import HomeHero from "./components/HomeHero";
import MySkills from "./components/MySkills";
import Portfolios from "./components/Portfolios";
import Services from "./components/Services";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import Testimonial from "./components/Testimonial";
import "./styles/layout.css";

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <HomeHero />
          <MySkills />
          <Services />
          <Portfolios />
          <Testimonial />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
