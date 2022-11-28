import './App.css';
import Education from './Education';
import Home from './Home';
import Navbar from './Navbar';
import Skills from './Skills';
import Interests from './Interests';
import { BrowserRouter , Routes ,Route} from 'react-router-dom';
import Projects from './Projects';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route exact path='/' key="homeKey" element={<Home/>}></Route> 
        <Route exact path='/education' key="educationKey" element={<Education/>}></Route> 
        <Route exact path='/skills' key="skillKey" element={<Skills/>}></Route> 
        <Route exact path='/interests' key="interestKey" element={<Interests/>}></Route> 
        <Route exact path='/projects' key="projectKey" element={<Projects/>}></Route> 
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App;
