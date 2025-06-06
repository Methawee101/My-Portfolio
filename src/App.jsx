import './App.css';
import './HomeScreen';
import Navbar from './Navbar';
import HomeScreen from './HomeScreen';
import About from './About';
import CerScreen from './cerScreen';
import Contact from './contact';
import ProjectScreen from './ProjectScreen';

function App() {
  

  return (
    <>
    
      <Navbar/>
      <div id = "home" className='min-h-screen p-10 '>
        <HomeScreen/>
      </div>
      <div id="about" className="min-h-screen p-10  ">
        <About/>
      </div>
      <div id = 'project' className="min-h-screen p-10 ">
        <ProjectScreen/>
      </div>
      <div id = 'certificate' className="min-h-screen p-10 ">
        <CerScreen/>
      </div>
      <div id = 'contact' className="min-h-screen p-10 ">
        <Contact/>
      </div>
    
    
    </>
  )
}

export default App
