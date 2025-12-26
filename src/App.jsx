import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import FloatingImage from "./components/Story";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar></NavBar>
      <Hero />
      <About></About>
      <Features></Features>
      <FloatingImage></FloatingImage>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}

export default App;
