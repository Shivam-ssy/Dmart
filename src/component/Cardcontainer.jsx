import React, { useContext, useEffect, useState } from "react";
import ShowContext from "../context/ShowContext.js";
import Modals from "./Modal.jsx";
import Card from "./Card.jsx";

function Cardcontainer() {
  const [selectedShow, setSelectedShow] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);
  const {keyword}=useContext(ShowContext)
  const { apiData } = useContext(ShowContext);
  const  apiDatas  = keyword !== "" ? filteredResults: apiData;
  const handleDetailsClick = (showDetails) => {
    console.log("Details button clicked");
    setSelectedShow(showDetails);
    console.log(selectedShow)
    console.log(showDetails)
  };
 
  useEffect(()=>{

    const handleSearch = () => {
    
      if (keyword !== '') {
        const results = apiData.filter((item) =>
          item?.title.toLowerCase().includes(keyword.toLowerCase())
        );
        setFilteredResults(results);
      } else {
        setFilteredResults([]);
      }
    };  
    handleSearch();
  },[keyword])
  const closeModal = () => {
    setSelectedShow(null);
  };

  if (!apiDatas) {
    return <div>Data not received or not found</div>;
  }

  return (
    <>
    
    <div className=" justify-content-center container gap-5 d-flex flex-wrap mt-3">
        {apiDatas.map((show) => (
          <div key={show.id}>
            <Card
              name={show?.title}
              imageUrl={show?.image}
              id={show?.id}
              details={show}
              onDetailsClick={() => handleDetailsClick(show)}
            />
          </div>
        ))}
         {selectedShow && (
        <Modals
          name={selectedShow?.title}
          imageUrl={selectedShow?.image}
          details={selectedShow}
          onClose={closeModal}
        />
      )}
      </div>
      
   
      

      
    </>
  );
}

export default Cardcontainer;
