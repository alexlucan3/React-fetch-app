import React from "react";
import PropTypes from "prop-types";
import Popup from "./Popup"
import {useState} from 'react'
import './Grid.scss'
import { Link } from 'react-router-dom'
const GridItem = ({ animal, index }) => {


const[buttonPopup,setButtonPopup]= useState(false);




  let backgroundImage = animal.photos.length > 0 ? animal.photos[0].medium : "";
  let AnimalColor = animal.colors.primary != null ? animal.colors.primary: "Not specified";
  let AnimalNeutered= animal.attributes.spayed_neutered = true ? "YES" : 'NO'
  let GoodwithChildrens= animal.environment.children = true ? "YES" : 'NO'
  let GoodwithDogs= animal.environment.dogs = true ? "YES" : 'NO'
  let GoodwithCats= animal.environment.cats = true ? "YES" : 'NO'
 

  return (
    <div className={`pet-box grid-container`}>
      <div className="box-header">
      <div><img src={backgroundImage} alt="background"></img></div>
      
          {console.log(animal)}
        
        <div>
          <span>{animal.name}</span>
          <br/>
          <span>
            <p>Age : {animal.age}
            </p>  
          </span>
          <div className="description">{animal.description}</div>
        </div>
        <button className="btnnn" onClick={()=> setButtonPopup(true) }>View Details</button>
        
   
      
        <div className="content">
          
          
          </div>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <div >
          <div ><p>Name : {animal.name}</p></div>
          <div ><p>Age : {animal.age}</p></div>
          <div ><p>Breed : {animal.breeds.primary}</p></div>
          <div ><p>Color : {AnimalColor}</p></div>
          <div ><p>Neutered : {AnimalNeutered}</p></div>
          <div ><p>Size : {animal.size}</p></div>
          <div ><img src={backgroundImage} alt='bg popup'></img></div>
          <div ><p>Good with : </p></div>
          <div ><p>Children : {GoodwithChildrens}</p></div>
          <div ><p>Dogs : {GoodwithDogs}</p></div>
          <div ><p>Cats : {GoodwithCats}</p></div>
        
          <Link
        to='/form'
        className="formula"       
      >
        ADOPT
      </Link>
          </div>
          </Popup>
        
      </div>
    </div>
  );
};

export default GridItem;

GridItem.types = {
  index: PropTypes.number,
  animal: PropTypes.shape({
    photos: PropTypes.array
  })
};
