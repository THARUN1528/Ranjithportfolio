import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black px-7 py-12">
      <div className=" mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-between text-center lg:text-left gap-6">
        <div className="lg:w-1/2">
          <h1 className="bg-gradient-to-r from-green-500 to-blue-400 bg-clip-text text-transparent text-2xl font-semibold mb-4">Let's Create Something Exponential</h1>
          <p className="text-gray-400 font-medium">Ready to transform your ideas into reality. Let's collaborate and build something extraordinary together.</p>
        </div>

        <div className="lg:w-1/3 ">
          <div className="text-gray-400 flex justify-center lg:justify-end items-center gap-2">
            <span><FaRegCopyright /></span>
            <span>2025 Full Stack Developer.</span>
          </div>
          <h5 className="text-gray-400 mt-2 flex justify-end">Engineering digital excellence with precision.</h5>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
