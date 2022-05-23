import React, { useState, useEffect, useRef } from "react";
import GridItem from "./GridItem";
import pf from "./Api.js";
import Loader from "./Loader.js";

const Grid = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const [pets, updatePets] = useState([]);
  // refs
  const pageRef = useRef(totalPage);
  const loadingRef = useRef(loading);
  const currentPageRef = useRef(currentPage);

  useEffect(() => {
    const getPets = () => {
  
      let searchTerm = {
        //type: "dog",     
        // Nu am apucat sa fac filtrele de cautare , deoarece sunt foarte obosit . Sunt in sesiune si trebuie sa invat pentru examene si trebuie sa dau sala pentru categoria E .
        // Am lucrat pana la 3-4 dimineata in aceste zile . Sper sa fie oki ce am lucrat pana acum . M-am bazat mai mult pe partea de back-end , fetch-api si form .
        // Recunosc, nu ma pricep tare bine la css , dar mi-am dat silinta .
        page: currentPageRef.current
      };
      pf.animal.search(searchTerm).then(response => {
        let petsData = response.data;
        updatePets(pets => [...pets, petsData.animals].flat());
        updateTotalPage(petsData.pagination.total_pages);
        updateLoading(false);
      });
    };
    getPets();
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 &&
        !loadingRef.current &&
        !(currentPageRef.current >= pageRef.current)
      ) {
        updateLoading(true);
        console.log("--CALLED-", !loadingRef.current);
        let nextPage = currentPageRef.current + 1;
        updateCurrentPage(nextPage);
        getPets();
        console.log("--CALLED-", !loadingRef.current);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  }, []);

  
  const updateTotalPage = data => {
    pageRef.current = data;
    setTotalPage(data);
  };

  // Update loading state
  const updateLoading = data => {
    loadingRef.current = data;
    setLoading(data);
  };

  const updateCurrentPage = data => {
    currentPageRef.current = data;
    setCurrentPage(data);
  };

  

  let loader;
  if (!pets.length || loading) {
    loader = (
      <div className="spinner">
        <Loader />
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="container animals-grid">
        <div className="grid-boxes">
          {pets.length > 0 &&
            pets.map((animal, i) => {
              return <GridItem cindex={i} animal={animal} key={animal.id} />;
            })}
        </div>
      </div>
      {loader}
    </React.Fragment>
  );
};

export default Grid;
