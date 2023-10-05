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
      <div className=" lg:px-48 sm:px-16 h-screen flex lg:flex-row sm:flex-col gap-2">
        <div className=" lg:pt-20 sm:pt-20 flex flex-col w-1/2 sm:w-full justify-between pb-20">
          <div>
            <Introduction></Introduction>

            <div className="mt-20">
              <Routing changepos={changepos}></Routing>
            </div>
          </div>
          <div>
            <Links></Links>
          </div>
        </div>
        <div
          id="content"
          className="scroll-smooth  flex flex-col w-1/2 sm:w-full h-full overflow-scroll no-scrollbar"
        >
          <div id="about" className="lg:pt-20 sm:pt-20">
            <About></About>
          </div>
          <div id="experience" className="experience pt-24 ">
            <Experience></Experience>
            <Experience></Experience>
            <Experience></Experience>
          </div>
          <div id="projects" className="projects pt-24 ">
            <Projects></Projects>
            <Projects></Projects>
            <Projects></Projects>
            <Projects></Projects>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
