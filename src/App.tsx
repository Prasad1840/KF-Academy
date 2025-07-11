import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './components/About';
import Trainings from './components/Trainings';
import Pod1Details from './components/pod-specific/POD-1';
import Pod5Layout from './components/pod-specific/POD-5';
function App() {
 

  return (
    <>
      <Navbar/>
      <Home />
      <About />
      <Trainings />
      <Pod1Details />
      <Pod5Layout/>
    </>
  )
}

export default App
