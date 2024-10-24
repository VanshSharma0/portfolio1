import React from 'react';
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import { Box } from "@mui/material";
import Exp from "./experience/Exp.jsx"

export default function SinglePageRoutes({ refs, darkMode }) {
   const { refHome, refAbout, refPortfolio, refExp } = refs;
   
   return (
      <Box>
         <Home innerRef={refHome} darkMode={darkMode} />
         <About innerRef={refAbout} darkMode={darkMode} />
         <Portfolio innerRef={refPortfolio} darkMode={darkMode} />
         <Exp innerRef={refExp} darkMode={darkMode}/>
      </Box>
   );
}