import React from "react";
import "./EpisodeCard.css";
import imdb from './IMDb.png'
function EpisodeCard(props) {
  return (
   
        <div className="containerr">
          
            <div className="box">
            <div className="imgBx">
              <img src={props.episodeImg} />
            </div>
            <div className="content">
              <h5>
                Season: {props.seasonNum}  Episode: {props.episodeNum}
              </h5>
              <h6>{props.episodeTitle}</h6>
              <h7><img className="imdb" src={imdb} /> {props.imdb}</h7>
              <p>{props.plott}</p>
            </div>
          </div>
        
           

          </div>
         
  
  );
}

export default EpisodeCard;
