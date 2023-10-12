import About from "./components/About";
import Experience from "./components/Experience";
import Introduction from "./components/Introduction";
import Links from "./components/Links";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import Projects from "./components/Projects";
import Routing from "./components/Routing";

function App() {
  const changepos = (pos) => {
    console.log("in function");
    document.getElementById(pos).scrollIntoView();
  };
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  return (
    <div className=" font-sans bg-darkblue">
          <Particles
           init={particlesInit}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#5eead4',
            },
            lineLinked: {
              color: {
                value: '#5eead4',
              },
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 3,
              straight: true,
            },
            number: {
              density: {
                enable: true,
                value_area: 1500,
              },
              value: 80,
            },
            opacity: {
              value: 0.1,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}>
      </Particles>  

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
            <div className="lg:hidden flex items-center  sticky top-0 text-brighttext  bg-darkblue h-16 font-bold opacity-80    ">
              About
            </div>
            <About></About>
          </div>
          <div id="experience" className="experience lg:pt-24 sm:pt-12 ">
            <div className="lg:hidden flex items-center  sticky top-0 text-brighttext  bg-darkblue h-16 font-bold opacity-80   align-middle ">
              <span>Experience</span>
            </div>
            <Experience></Experience>
          </div>

          <div
            id="projects"
            className="projects pt-24 sm:pt-12 lg:mt-15 sm:mt-10"
          >
            <div className="lg:hidden flex items-center sticky top-0 text-brighttext  bg-darkblue h-16 font-bold opacity-80 align-middle ">
              <span>Projects</span>
            </div>
            <Projects></Projects>
          </div>
          <div className="pt-24 sm:pt-12 pb-20">
            <p className="text-base text-darkertext ">
              Loosely designed in Figma and coded in Visual Studio Code by yours
              truly. Built with React.js and Tailwind CSS, deployed with git.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
