import Modal from "./Modal";
import React from "react";
import { useState } from "react";
function Card({
    id,name,url,imageUrl,summery,details,onDetailsClick
}) {
 
  return (
    <>
      <div className="">
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl} className="card-img-top" alt="image not found" style={{height: "15rem"}}/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
             {summery}
            </p>
            <div className="d-flex justify-content-between">
                <button onClick={() => onDetailsClick()} className="btn btn-sm btn-secondary">More Details</button>
            <span className="btn btn-sm  btn-primary">
           Buy $ {details?.price}
            </span>
            </div>
            
          </div>
        </div>
        
    

      </div>
    </>
  );
}
export default Card;
