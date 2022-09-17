import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard/CharacterCard";
import "../Characters/Characters.css";
import Grid from "@mui/material/Grid";
import { ScaleLoader } from "react-spinners";
import { Fade } from "react-reveal";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const base_url = "https://thronesapi.com/api/v2/Characters";

  useEffect(() => {
    axios
      .get(base_url)
      .then((response) => {
        console.log(response);
        setCharacters(response.data);
        setisLoading(true);
        setTimeout(() => {
          setisLoading(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [base_url]);

  return (
    <div className="charac">
      <Fade left>
        <h1 className="char">Characters</h1>
      </Fade>
      <Fade right>
        <h2 className="all">All the major ones.</h2>
      </Fade>

      {isLoading ? (
        <ScaleLoader size={15} color={"#F37A24"} loading={isLoading} />
      ) : (
        <Grid container spacing={1} justifyContent='center'>
          {characters.map((character) => (
            <Grid item xs={12} sm={6} md={4} key={character.id}>
              <Fade>
                <CharacterCard
                  key={character.id}
                  charName={character.fullName}
                  charTitle={character.title}
                  charFamily={character.family}
                  charImg={character.imageUrl}
                />
              </Fade>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default Characters;
