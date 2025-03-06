import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGithub, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

function Skills() {
  const skills = [
    { id: 1, name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { id: 2, name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { id: 3, name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { id: 4, name: "React", icon: <FaReact className="text-cyan-400" /> },
    { id: 5, name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { id: 6, name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { id: 7, name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { id: 8, name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { id: 9, name: "Java", icon: <FaJava className="text-blue-600" /> },
    { id: 10, name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { id: 11, name: "GitHub", icon: <FaGithub className="text-gray-400" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800 text-white text-center">
      <h2 className="text-4xl font-bold">My Skills</h2>
      <p className="text-gray-400 mt-2">Technologies I work with</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto mt-10 px-5">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-gray-900 p-5 rounded-lg shadow-md flex flex-col items-center transition transform hover:scale-110"
          >
            <div className="text-5xl">{skill.icon}</div>
            <p className="mt-3 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
// In the above code, we created a functional component called Skills. We defined an array of objects representing different skills along with their icons. We then mapped over the skills array to render each skill as a card with its respective icon and name.