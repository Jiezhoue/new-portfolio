import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import HomePage from './pages/HomePage';
import "./styles/root.css"

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
