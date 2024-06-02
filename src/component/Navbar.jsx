import React from "react";
import { useContext } from "react";
import ShowContext from "../context/ShowContext";
import { useState } from "react";
function Mynav() {
  const {keyword}=useContext(ShowContext)
  const {setKeyword}=useContext(ShowContext)
  const [tempkey,settempkey]=useState("")
  const handleSearch=(e)=>{
    settempkey(e.target.value)
    setTimeout(()=>{
      setKeyword(tempkey)
    },200)
  }
  return (
    <>
      <div className=" container-fluid border border-secondary border-end-0 border-start-0 mb-3  d-flex justify-content-between align-items-center">
          <h2 style={{
            fontFamily:"sarif"
          }}><span className=" text-primary">D</span>Mart</h2>
          <form className="d-flex">
        <input value={tempkey} onChange={handleSearch} className="form-control me-2" type="search" placeholder="Search items" aria-label="Search"/>
      </form>
          <span style={{cursor:"pointer"}}>Menu+</span>
      </div>
    </>
  );
}
export default Mynav;
