import React from 'react';
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import { Box } from "@mui/material";

export default function SinglePageRoutes({ refs, darkMode }) {
   const { refHome, refAbout, refPortfolio } = refs;
   
   return (
      <Box>
         <Home innerRef={refHome} darkMode={darkMode} />
         <About innerRef={refAbout} darkMode={darkMode} />
         <Portfolio innerRef={refPortfolio} darkMode={darkMode} />
      </Box>
   );
}