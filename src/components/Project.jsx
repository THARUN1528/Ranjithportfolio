import {projects} from "../constants"
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function Project() {
  return (
    <section className= "bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mt-20 mb-14 bg-gradient-to-r from-green-500 to-blue-400 bg-clip-text text-transparent ">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-900 rounded-lg p-6 shadow-lg">
              <img src={project.image} alt={project.title} className="rounded-lg w-full mb-4" />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-500 mt-3">{project.description}</p>
              <div className="my-4 flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="bg-teal-950 text-green-400 text-sm px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="text-green-400 mt-2 flex gap-2">
                View Project <a className="mt-1 text-sm"><FaArrowUpRightFromSquare /></a>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project