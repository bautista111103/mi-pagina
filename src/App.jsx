import React from "react";
import {Route, Routes} from "react-router-dom"
import "./styles/style.css";
import ResponsiveAppBar from "./components/NavBar.jsx"
import Home from "./pages/Home.jsx"
import Images from "./pages/Images.jsx";

function App() {
  return (
    <>
      <ResponsiveAppBar/>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/index" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/images" element={<Images/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
