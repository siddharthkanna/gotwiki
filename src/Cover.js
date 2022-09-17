import React from "react";
import "./Cover.css";
import { Button } from "react-bootstrap";
import { Fade, Zoom } from "react-reveal";

function Cover() {
  return (
    <div className="cover">
      <Fade duration={1000}>
        <img
          className="coverimage"
          src="https://i.pinimg.com/originals/97/87/21/9787215b1b19866cbc461c1d2b8e28b6.png"
          alt=""
        />
      </Fade>

      <div className="covertext">
        <Zoom>
          <h1 style={{ fontFamily: "GameofThrones" }}>VALAR MORGHULIS</h1>
        </Zoom>
        <Zoom delay={500}>
          <h3>
            Welcome to <span className="sp"> GOTWIKI.</span>
            <br />
            The Game of Thrones Wikipedia.
          </h3>
        </Zoom>
        <div className="buttonss">
          <Zoom delay={750}>
            <Button
              style={{ margin: "5px" }}
              variant="outline-light"
              href="/episodes"
            >
              Episodes
            </Button>

            <Button
              href="/characters"
              style={{ margin: "5px" }}
              variant="outline-light"
            >
              Characters
            </Button>
            <Button
              href="/houses"
              style={{ margin: "5px" }}
              variant="outline-light"
            >
              Houses
            </Button>
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default Cover;
