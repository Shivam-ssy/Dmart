// Modal.jsx

import React from "react";

const Modals = ({ name, imageUrl, url, details,onClose }) => {
  console.log("modal us ");
  return (
    <div role="dialog" tabIndex="-1" style={{position:"fixed",
                                             top:"4em",
                                             bottom:0,
                                             width:"70%",
                                             height:"fit-content",
                                             background:"grey",
                                             padding:"2em",
                                             borderRadius:"10px"}}>
      <div className="modal-dialog " role="dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{name}</h5>
            <button type="button" className="close bg-transparent border-0" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body p-md-5 position-relative">
            <div className="d-flex  justify-content-around">
            <img  src={details?.image} alt={name} style={{maxHeight:"15em",maxWidth:"10em",position:"relative"}} />
            <div className="d-flex w-75 flex-column align-items-start">
              <div><span className="fw-bold">Category: </span><span>{details?.category}</span></div>
              <div className="d-flex flex-column flex-md-row"><span className="fw-bold">Description: </span><span className="">{details?.description}</span></div>
              <div><span className="fw-bold">⭐: </span><span>{details?.rating?.rate}</span></div>
              <div><span className="fw-bold">Review: </span><span>{details?.rating?.count}</span></div>
              <span className="btn btn-sm  btn-primary">
           Buy $ {details?.price}
            </span>
            </div>
            </div>
           
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
