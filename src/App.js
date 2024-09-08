import Education from "./components/Education";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks"
import Skills from "./components/SkillsSet"
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Experience } from "./components/Experience";
// import { Experience } from "./components/Experience";

function App() {
  return (
    <div>
        <Header/>
        <Home/>
        <SocialLinks/>
        <Experience/>
        <Portfolio/>
        <Skills/>
        <Education/>
    </div>
  );
}

export default App;
