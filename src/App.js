import React from "react";
import "./App.css"
import Header from "./Components/header/Header.jsx";
import Home from "./Components/home/Home.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main clasName='main'>
        <Home/>
      </main>
    </>
  );
};

export default App;
