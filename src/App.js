import React from "react";
import {Route, Routes} from "react-router-dom"
import "./styles/style.css";
import ResponsiveAppBar from "./components/NavBar.jsx"
import Home from "./pages/Home.jsx"
import Teams from './pages/Teams.jsx';
import Stadiums from "./pages/Stadiums.jsx";
import Matches from './pages/Matches.jsx'
// import ReactPlayer from 'react-player'

function App() {
  return (
    <div className="app">
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/index" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/teams" element={<Teams/>}/>
        <Route path="/stadiums" element={<Stadiums/>}/>
        <Route path="/matches" element={<Matches/>}/>
      </Routes>
    </div>
  
  );
}

export default App;
