import React from "react";
import HousesCard from "./HousesCard";
import "../Houses/Houses.css";
import { Zoom } from "react-reveal";
import { got } from "./HousesData";
import { Parallax } from "react-parallax";

function Houses() {
  return (
    <div className="yoo">
      <div className="edo">
        <Parallax strength={400}>
          <img
            className="iimg"
            src="https://wallpapercave.com/wp/wp3914133.jpg"
            alt=""
          />

          <div className="text">
            <Zoom>
              <h1 className="houses">HOUSES</h1>
              <h2 className="sub">
                The most powerful noble houses of Seven Kingdoms.
              </h2>
            </Zoom>
          </div>
        </Parallax>
      </div>
      <div>
        {got.map((house) => (
          <HousesCard
            houseName={house.name}
            houseImg={house.image}
            houseWord={house.words}
          />
        ))}
      </div>
    </div>
  );
}

export default Houses;
