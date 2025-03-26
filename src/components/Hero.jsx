import { FaRegEnvelope } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4 sm:px-8 md:px-16">
      <div className="text-5xl font-light text-green-500 mb-6">&lt;/&gt;</div>
      <h3 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent text-center">
        Full Stack Developer
      </h3>
      <p className="text-wrap text-center text-gray-400 mt-4 text-lg sm:text-xl md:text-2xl max-w-2xl">
        Crafting exceptional digital experiences through innovative development and elegant solutions
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
        <button className="hover:bg-green-400 font-semibold text-green-500 border-green-400 border-2 rounded-full px-6 py-2 hover:text-black ">
          View Projects
        </button>
        <button className="hover:bg-green-400 font-semibold text-green-500 border-green-400 border-2 rounded-full px-6 py-2 hover:text-black ">
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default Hero;
