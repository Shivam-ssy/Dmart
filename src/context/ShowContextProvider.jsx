import React from "react";
import ShowContext from "./ShowContext.js";
import { useState,useEffect } from "react";

const ShowContextProvider = ({children}) => {
    const [apiData, setApiData] = useState([]);
    const [openModal,setModal]=useState(false)
    const [loader , setloader]=useState(false)
    const [keyword,setKeyword]=useState('')
  useEffect(() => {
    const fetchData = async () => {
      setloader(true)
        const response = await fetch(
            "https://fakestoreapi.com/products"
          ).then((res)=>res.json())
          .finally(()=>setloader(false));
          setApiData(response)
        //   const data =response.json();
    };

    fetchData();
  }, []);
 
    return(
        <ShowContext.Provider value={{apiData,openModal,setModal,loader,keyword,setKeyword}}>    
        {children}
        </ShowContext.Provider>
    )
}

export default ShowContextProvider