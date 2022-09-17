import React from "react";
import "./HouseCard.css";
import { Parallax } from "react-parallax";
import { height, width } from "@mui/system";

function HousesCard(props) {
  return (
    <div className="App">
      <Parallax strength={400} bgImage={props.houseImg} speed={0.2} >
        <div className="content">
          <div className="text-content">
           <h1> House {props.houseName}</h1>
           <h2>"{props.houseWord}"</h2>
            </div>
         
        </div>
      </Parallax>
    </div>
  );
}

export default HousesCard;
