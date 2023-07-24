import { Route, Routes } from "react-router-dom";
import "./App.css";
import darksky from "../src/Pages/logo/dark sky.jpeg";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Home/Projects";
import Skills from "./Pages/Home/Skills";
import AboutMe from "./Pages/Home/AboutMe";
import Footer from "./Pages/Shared/Footer";
import ContactMe from "./Pages/Home/ContactMe";
import Header from "./Pages/Shared/Header";

function App() {
  return (
    <div
      className="max-w-7xl mx-auto App"
      style={{ backgroundImage: `url(${darksky})` }}
    >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />

        <Route path="/aboutme" element={<AboutMe></AboutMe>} />
        <Route path="/Skills" element={<Skills></Skills>} />
        <Route path="/Projects" element={<Projects></Projects>} />
        <Route path="/contactme" element={<ContactMe></ContactMe>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
