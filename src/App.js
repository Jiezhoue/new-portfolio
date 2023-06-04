
// import "./styles/root.css"

import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import ProjectTemplate from "./component/PojectTemplate";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";


function App() {


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/project' element={<ProjectPage />} />
        <Route path="/project/:id" element={<ProjectTemplate />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
