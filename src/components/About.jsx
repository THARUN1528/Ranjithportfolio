const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="mb-11 text-4xl font-semibold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
        About Me
      </div>
      <div className="box-border bg-slate-900 border-gray-800 border-2 shadow-none rounded-lg w-11/12 md:w-2/4 p-6">
        <p className="mb-7 font-light text-justify">
          I'm a Passionate full-stack developer dedicated to crafting exceptional digital experiences.
          With a deep understanding of both frontend and backend technologies, I transform complex
         challenges into elegant, user-centric solutions that drive business success.
        </p>
        <div className="flex flex-col md:flex-row gap-5 mt-5">
          <div className="box-border border-gray-800 border-2 rounded-lg p-3 w-full md:w-3/5">
            <h4 className="pb-3 mb-3 mt-3 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-bold">
              Professional Journey
            </h4>
            <p className="mb-3 font-extralight">&gt; 7+ years of development expertise</p>
            <p className="mb-3 font-extralight">&gt; Led 20+ successful Projects</p>
            <p className="mb-3 font-extralight">&gt; Agile methodology expert</p>
          </div>
          <div className="box-border border-gray-800 border-2 rounded-lg p-3 w-full md:w-3/5">
            <h3 className="pb-3 mt-3 mb-3 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-bold">
              Development Philosophy
            </h3>
            <p className="mb-3 font-extralight">&gt; Clean, scalable architecture</p>
            <p className="mb-3 font-extralight">&gt; Performance-first approach</p>
            <p className="mb-3 font-extralight">&gt; User-centered development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
