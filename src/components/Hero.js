import { motion, useScroll, useTransform } from "framer-motion";
import bgImage from "../assets/background.jpg";

function Hero() {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section className="relative w-full min-h-screen">
      {/* Background Image with Smooth Scroll Effect */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          y: bgY,
        }}
      ></motion.div>

      {/* Light Overlay for Readability (reduced opacity) */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Content Box */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen p-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl font-bold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello, I'm Pranjal
        </motion.h1>

        <motion.p
          className="text-xl text-gray-200 mt-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Software Developer | Web Enthusiast
        </motion.p>

        <motion.a
          href="#projects"
          className="mt-6 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-md transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          View My Work
        </motion.a>
      </motion.div>

      {/* Navbar (Fixed at the top) */}
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-50 backdrop-blur-sm text-white py-4 px-8 flex justify-between items-center z-20">
        <h2 className="text-xl font-bold">Pranjal's Portfolio</h2>
        <div className="space-x-6">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
      </nav>
    </section>
  );
}

export default Hero;
