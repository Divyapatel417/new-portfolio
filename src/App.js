import About from "./components/About";
import Experience from "./components/Experience";
import Introduction from "./components/Introduction";
import Links from "./components/Links";
import Projects from "./components/Projects";
import Routing from "./components/Routing";




function App() {
  return (
    <div className= " font-sans bg-darkblue"  >
      <div className=" lg:px-48 sm:px-16 h-screen flex lg:flex-row sm:flex-col gap-2">
        <div className=" lg:pt-20 sm:pt-20 flex flex-col w-1/2 sm:w-full justify-between pb-20">
          <div>
        <Introduction></Introduction>
        
        <div className="mt-20">
        <Routing></Routing>
        </div>
        </div>
        <div>
        <Links></Links>
        </div>
        </div>
        <div className="  lg:pt-20 sm:pt-20 flex flex-col w-1/2 sm:w-full h-full overflow-scroll no-scrollbar">
        
        <About></About>
        <div className="pt-24 "> 
        <Experience></Experience>
        <Experience></Experience>
        <Experience></Experience>
        </div>
      
    <Projects></Projects>
    <Projects></Projects>
    <Projects></Projects>
    <Projects></Projects>
          </div>
      </div>
   
    
    
    </div>
  );
}

export default App;
