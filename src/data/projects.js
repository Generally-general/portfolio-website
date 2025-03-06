import portfolioImg from "../assets/projects/portfolio.png";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and Tailwind CSS.",
    image: portfolioImg,
    demo: "https://portfolio-website-chi-pied.vercel.app/",
    code: "https://github.com/Generally-general/portfolio-website",
    tags: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Task Manager",
    description: "A simple task management app using MERN stack.",
    image: "https://source.unsplash.com/400x300/?todo",
    demo: "#",
    code: "#",
    tags: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    id: 3,
    title: "AI Chatbot",
    description: "An AI-powered chatbot using OpenAI API.",
    image: "https://source.unsplash.com/400x300/?chatbot",
    demo: "#",
    code: "#",
    tags: ["Python", "OpenAI", "API"],
  },
];

export default projects;
// In the above code, we exported an array of project objects. Each project object contains an id, title, description, image URL, demo URL, and source code URL. This data will be used to display the projects on the Projects page.