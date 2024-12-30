import { 
  BrowserRouter as Router, Routes, 
  Rout, Link
} from "react-router-dom"; 

import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import NavbarComponent from './components/Navbar/NavbarComponent';

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
