import React from "react";
import "./CharacterCard.css";


function CharacterCard(props) {
  return (
    
      <div class="contain">
        <div class="card">
          <div class="imgBx">
            <img src={props.charImg} />
          </div>
          <div class="content">
            <h2>{props.charName}</h2>
            <h3>Family: {props.charFamily}</h3>
            <h4>"{props.charTitle}"</h4>
           
          </div>
        </div>
      </div>
    
    
  );
}

export default CharacterCard;
