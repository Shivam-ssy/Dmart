import React, { useState, useEffect } from "react";
import Mynav from "./component/Navbar";
import ShowContext from "./context/ShowContext.js";
import Cardcontainer from "./component/Cardcontainer";
import { useContext } from "react";
import "./App.css"
const MyComponent = () => {
  const {loader}=useContext(ShowContext)
  
  return (
    
      <div className="container-fluid">
        {
          loader==true ? (<div className="loader"><div className="spinner"></div></div>):(<div className="container-fluid"> <Mynav /><Cardcontainer/> </div>)
        }
        
      </div>
   
  );
};

export default MyComponent;
