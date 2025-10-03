import React from "react";
import "./App.css"
import Header from "./Components/header/Header.jsx";
import Home from "./Components/home/Home.jsx";
import About from "./Components/about/About.jsx";
import Skills from "./Components/skills/Skills.jsx";
import Contact from "./Components/contact/Contact.jsx";
import Footer from "./Components/footer/Footer.jsx";
import ScrollUp from "./Components/scrollup/ScrollUp.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Contact/>
      </main>

      <Footer/>
      <ScrollUp/>
    </>
  );
};

export default App;
