import React from "react";
import "./App.css"
import Header from "./Components/header/Header.jsx";
import Home from "./Components/home/Home.jsx";
import About from "./Components/about/About.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home/>
        <About/>
      </main>
    </>
  );
};

export default App;
