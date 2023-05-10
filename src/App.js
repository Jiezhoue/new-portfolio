import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import HomePage from './pages/HomePage';
import "./styles/root.css"
import { useEffect, useState } from 'react';
import NavBarDesktop from './component/NavBarDesktop';
import HeroSection from './component/HeroSection';

function App() {
  const [windowWidth, setWindowWodth] = useState(400)

  useEffect(()=>{
    setWindowWodth(window.innerWidth)
  },[windowWidth])

  if(windowWidth > 400){
    return (
      <div className="App">

        <NavBarDesktop />
        <HomePage />
      </div>
    )
  }

  return (
    <div className="App">
      <NavBar />
      <HomePage >
        <HeroSection />
      </HomePage>
    </div>
  );
}

export default App;
