import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { seasonssMock } from "../Mock";
import EpisodeCard from "./EpisodeCard";
import "./Seasons.css";
import { Slide} from "react-reveal";


function Seasons() {
  const [items, setItems] = useState(seasonssMock);
  const filterItem = (categItem) => {
    const updatedItems = seasonssMock.filter((curElem) => {
      return curElem.seasonNumber === categItem;
    });

    setItems(updatedItems);
  };
  return (
    <div className="boddy">
      <Slide left>
        <h1>Episodes.</h1>
        <h2>The Complete List.</h2>
      </Slide>

      <div className="buttons">
        <Button onClick={() => filterItem("1")}>Season 1</Button>
        <Button onClick={() => filterItem("2")}>Season 2</Button>
        <Button onClick={() => filterItem("3")}>Season 3</Button>
        <Button onClick={() => filterItem("4")}>Season 4</Button>
        <Button onClick={() => filterItem("5")}>Season 5</Button>
        <Button onClick={() => filterItem("6")}>Season 6</Button>
        <Button onClick={() => filterItem("7")}>Season 7</Button>
        <Button onClick={() => filterItem("8")}>Season 8</Button>
      </div>

      <div className="s1">
        {items.map((season) => (
          <EpisodeCard
            key={season.id}
            seasonNum={season.seasonNumber}
            episodeNum={season.episodeNumber}
            plott={season.plot}
            episodeImg={season.image}
            episodeTitle={season.title}
            imdb={season.imDbRating}
          />
        ))}
      </div>
    </div>
  );
}

export default Seasons;
