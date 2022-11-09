import React from "react";
import {Route, Routes} from "react-router-dom"
import "./styles/style.css";
import ResponsiveAppBar from "./components/NavBar.jsx"
import Home from "./pages/Home.jsx"

function App() {
  return (
    <>
    <div className="App">
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/index" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
