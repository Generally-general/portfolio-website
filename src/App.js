import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      <Hero />

      {/* Main content takes up remaining space */}
      <div className="flex-1">
        <Projects />
      </div>
      <Skills />
      <Contact />

      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
// In the above code, we imported the Navbar, Hero, Footer, and Projects components. We then rendered these components inside the App component. The Navbar component is displayed at the top of the page, the Hero component is displayed below the Navbar, the Projects component takes up the main content area, and the Footer component is displayed at the bottom of the page.