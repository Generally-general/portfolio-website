import { useState, useEffect } from "react";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full p-5 fixed top-0 left-0 transition-all duration-300 ${
        scrolling ? "bg-gray-900 shadow-md text-white" : "bg-gray-800 text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pranjal Kumar</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
// In the above code, we created a functional component called Navbar. We used the useState and useEffect hooks to manage the scrolling state of the page. We added an event listener to the window object to detect scrolling and update the scrolling state accordingly.
// We then conditionally applied different styles to the navbar based on the scrolling state. If the user has scrolled more than 50 pixels, we apply a different background color and shadow to the navbar. Otherwise, we apply a different background color.