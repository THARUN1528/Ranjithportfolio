import { FaRegEnvelope } from "react-icons/fa";
import { FiGithub, FiLinkedin  } from "react-icons/fi";

function Contact() {
  return (
    <div className="flex flex-col flex-wrap items-center py-10 bg-black  text-white ">
        <div className="text-4xl bg-gradient-to-r from-green-500 to-blue-400 bg-clip-text text-transparent font-semibold mt-20 mb-10">Get In Touch</div>
        <div className="flex flex-col md:flex-row gap-8 my-8">
            <div className=" flex flex-col box-border border-2 p-8 items-center bg-slate-900 border-gray-800 rounded-md px-14 transition-transform transform hover:scale-105">
                <div className="box-border rounded-1 rounded-full border-transparent bg-teal-950 p-4 text-3xl mb-2 text-green-400"><FaRegEnvelope /></div>
                <h1 className="font-semibold my-2">Email</h1>
                <a className="font-semibold text-gray-500">contact@example.com</a>
            </div>
            <div className=" flex flex-col box-border border-2 p-8 items-center bg-slate-900 border-gray-800 rounded-md px-14 transition-transform transform hover:scale-105">
                <div className="box-border rounded-1 rounded-full border-tr ansparent bg-teal-950 p-4 text-3xl mb-2 text-green-400"><FiGithub /></div>
                <h1 className="font-semibold my-2">GitHub</h1>
                <a className="font-semibold text-gray-500">github.com/username</a>
            </div>
            <div className=" flex flex-col box-border border-2 p-8 items-center bg-slate-900 border-gray-800 rounded-md px-14 transition-transform transform hover:scale-105">
                <div className="box-border rounded-1 rounded-full border-transparent bg-teal-950 p-4 text-3xl mb-3 text-green-400"><FiLinkedin /></div>
                <h1 className="font-semibold my-2">LinkedIn</h1>
                <a className="font-semibold text-gray-500">linkedin.com/in/username</a>
            </div>
            
        </div>
    </div>
  )
}

export default Contact