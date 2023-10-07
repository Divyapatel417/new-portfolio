import About from "./components/About";
import Experience from "./components/Experience";
import Introduction from "./components/Introduction";
import Links from "./components/Links";
import Projects from "./components/Projects";
import Routing from "./components/Routing";

function App() {
  const changepos = (pos) => {
    console.log("in function");
    document.getElementById(pos).scrollIntoView();
  };

  return (
    <div className=" font-sans bg-darkblue">
      <div className=" lg:px-48 sm:px-6 lg:h-screen flex lg:flex-row sm:flex-col gap-2 sm:overflow-scroll sm:h-screen no-scrollbar">
        <div className=" lg:pt-20 sm:pt-20 flex flex-col w-1/2 sm:w-full lg:justify-between sm:justify-normal pb-20">
          <div>
          
            <Introduction></Introduction>

            <div className="sm:hidden lg:block mt-20">
              <Routing changepos={changepos}></Routing>
            </div>
          </div>
          <div className="sm:pt-6">
            <Links></Links>
          </div>
        </div>
        <div
          id="content"
          className="lg:scroll-smooth  flex flex-col w-1/2 sm:w-full lg:h-full lg:overflow-scroll no-scrollbar"
        >
          <div id="about" className="lg:pt-20 sm:pt-6">
          <div className="lg:hidden flex items-center  sticky top-0 text-brighttext  bg-darkblue h-16 font-bold opacity-80    ">About</div>
            <About></About>
          </div>
          <div id="experience" className="experience lg:pt-24 sm:pt-12 ">
          <div className="lg:hidden flex items-center  sticky top-0 text-brighttext  bg-darkblue h-16 font-bold opacity-80   align-middle "><span>Experience</span></div>
            <Experience></Experience>
            
          </div>
          
          <div id="projects" className="projects pt-24 sm:pt-12 lg:mt-15 sm:mt-10">
          <div className="lg:hidden flex items-center sticky top-0 text-brighttext  bg-darkblue h-16 font-bold opacity-80 align-middle "><span>Projects</span></div>
            <Projects></Projects>
            
          </div>
          <div className="pt-24 sm:pt-12 pb-20">
              <p className="text-base text-darkertext ">
              Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with React.js and Tailwind CSS, deployed with Vercel. All text is set in the Inter typeface.
              </p>

    </div>
        </div>

      </div>
    </div>
  );
}

export default App;
