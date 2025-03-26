import { TbDeviceIpadCode } from "react-icons/tb";
import { VscServerProcess } from "react-icons/vsc";
import { CiCloud } from "react-icons/ci";

function Technologies() {
  return (
    <div className="flex flex-col items-center lg:justify-center bg-black px-4 sm:px-8 md:px-16 py-10">
      <div className="text-4xl font-semibold mb-10 bg-gradient-to-r from-green-500 to-blue-400 bg-clip-text text-transparent text-center">
        Technical Expertise
      </div>
      <div className="flex flex-col sm:flex-row  lg:justify-center min-w-full gap-10 p-5">
        <div className="box-border border-2 p-5 bg-slate-900 border-gray-800 rounded-md w-full sm:w-1/2 lg:w-1/3">
          <div className="box-border border-gray-800 border-2 size-10 p-3 rounded-md my-3 text-green-400">
            <TbDeviceIpadCode />
          </div>
          <h1 className="my-5 font-semibold text-2xl text-white">Frontend Development</h1>
          <p className="text-gray-500 mb-5">Creating responsive, performant user interfaces with modern technologies</p>
          <div className="flex flex-wrap gap-2">
            <button className="bg-teal-950 font-semibold text-green-400 border-2 px-3 border-transparent rounded-xl mb-2">React</button>
            <button className="bg-teal-950 font-semibold text-green-400 border-2 px-3 border-transparent rounded-xl mb-2">Next.js</button>
            <button className="bg-teal-950 font-semibold text-green-400 border-2 px-3 border-transparent rounded-xl mb-2">TypeScript</button>
            <button className="bg-teal-950 font-semibold text-green-400 border-2 px-3 border-transparent rounded-xl mb-2">Tailwind</button>
          </div>
        </div>

        <div className="box-border border-2 p-5 bg-slate-900 border-gray-800 rounded-md w-full sm:w-1/2 lg:w-1/3">
          <div className="box-border border-2 border-gray-800 size-10 p-3 rounded-md my-3 text-green-400">
            <VscServerProcess />
          </div>
          <h1 className="my-5 font-semibold text-2xl text-white">Backend Development</h1>
          <p className="text-gray-500 mb-5">Building scalable server architecture and robust APIs</p>
          <div className="flex flex-wrap gap-2">
            <button className="bg-teal-950 text-green-400 border-2 font-semibold px-3 border-transparent rounded-xl mb-2">Node.js</button>
            <button className="bg-teal-950 font-semibold text-green-400 border-2 px-3 border-transparent rounded-xl mb-2">Python</button>
            <button className="bg-teal-950 font-semibold text-green-400 border-2 px-3 border-transparent rounded-xl mb-2">GraphQL</button>
            <button className="bg-teal-950 font-semibold text-green-400 border-2 px-3 border-transparent rounded-xl mb-2">REST</button>
          </div>
        </div>

        {/* DevOps & Cloud */}
        <div className="box-border border-2 p-5 bg-slate-900 border-gray-800 rounded-md w-full sm:w-1/2 lg:w-1/3">
          <div className="box-border border-2 border-gray-800 size-10 rounded-md p-3 my-3 text-green-400">
            <CiCloud />
          </div>
          <h1 className="my-5 font-semibold text-2xl text-white">DevOps & Cloud</h1>
          <p className="text-gray-500 mb-5">Implementing cloud solutions and automated deployment pipelines</p>
          <div className="flex flex-wrap gap-2">
            <button className="bg-teal-950 font-semibold text-green-400 border-2 px-3 border-transparent rounded-xl mb-2">AWS</button>
            <button className="bg-teal-950 font-semibold text-green-400 border-2 px-3 border-transparent rounded-xl mb-2">Docker</button>
            <button className="bg-teal-950 font-semibold text-green-400 border-2 px-3 border-transparent rounded-xl mb-2">CI/CD</button>
            <button className="bg-teal-950 font-semibold text-green-400 border-2 px-3 border-transparent rounded-xl mb-2">Kubernetes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
