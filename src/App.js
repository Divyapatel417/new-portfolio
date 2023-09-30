import About from "./components/About";
import Experience from "./components/Experience";
import Introduction from "./components/Introduction";
import Routing from "./components/Routing";




function App() {
  return (
    <div className= " font-sans bg-darkblue"  >
    <Introduction></Introduction>
    <Routing></Routing>
    <About></About>
    <Experience></Experience>
    </div>
  );
}

export default App;
