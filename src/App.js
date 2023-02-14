import React, { useState } from 'react'
import Navbar from './movieapi/navbar/Navbar'
import Home from './movieapi/pages.jsx/Home'
import { Routes, Route } from "react-router-dom";
import Popularpage from './movieapi/pages.jsx/Popularpage';
import Topratedpage from './movieapi/pages.jsx/Topratedpage';


const App = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="container-fluid">
        <Navbar handleClickOpen={handleClickOpen} open={open} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popularpage" element={<Popularpage />} />
          <Route path="/topratedpage" element={<Topratedpage />} />
        </Routes>
      </div>
    </>
  )
}

export default App



/*
import React from "react";
import Product from "./Component/ClassComponent/Product";
// import Login from "./Component/Login/Login";
// import Welcome from "./Component/WelComePage/Welcome";
// import Usememo from "./Component/hooks/Usememo";
// import ClassBasedComponent from "./Component/ClassComponent/ClassBasedComponent";

function App() {
  return (
    <>
       <Login /> 
       <Welcome/> 
       <Usememo /> 
       < ClassBasedComponent />
       <Product  />
    </>
  );
}

export default App;
*/
