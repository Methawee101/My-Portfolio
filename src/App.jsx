import './App.css';
import './HomeScreen';
import Navbar from './Navbar';
import HomeScreen from './HomeScreen';
import About from './About';
import CerScreen from './cerScreen';

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
      <div id = 'certificate' className="min-h-screen p-10 ">
        <CerScreen/>
      </div>
    
    </>
  )
}

export default App
