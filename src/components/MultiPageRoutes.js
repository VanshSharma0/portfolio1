import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import Exp from './experience/Exp';

export default function MultiPageRoutes({ darkMode }) {
   return (
      <Routes>
         <Route exact path={'/'} element={<Home darkMode={darkMode} />} />
         <Route exact path={'/about'} element={<About darkMode={darkMode} />} />
         <Route exact path={'/portfolio'} element={<Portfolio darkMode={darkMode} />} />
         <Route exact path={'/experience'} element={<Exp darkMode={darkMode}/>}/>
      </Routes>
   );
}