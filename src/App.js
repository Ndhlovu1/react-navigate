import './App.css';
import Homepage from './components/Homepage';
import AboutLittleLemon from './components/About';
import {Routes, Route, Link} from "react-router-dom"
import Contact from './components/Contact';
import logo from "./assets/logo.png"

function App() {
  return (
    <>
    
      <nav>
        <div className='pic'>
          <img src={logo} alt='logo of panarot pizza place'/>
        </div>
        <Link to="/" className='nav-item'>Home</Link>
        <Link to="/about" className='nav-item'>About</Link>
        <Link to='/contact' className='nav-item'>Contact</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/about' element={<AboutLittleLemon/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>

    </>
  );
}

export default App;
