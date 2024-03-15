import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import BackTop from "./BackTop";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
      <BackTop />
    </div>
  );
}
