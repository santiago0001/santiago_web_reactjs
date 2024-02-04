import React from "react";
import { BoxImgHome } from "./Home.styled";
import { Container } from "@mui/material";
import { AboutMe } from "./AboutMe/AboutMe";

export const Home = () => {
  return (
    <Container maxWidth={"md"}>
      <BoxImgHome>
        <img
          src="./images/ImageHome.png"
          alt="Ejemplo"
          width="100%"
          style={{ borderRadius: 30 }}
        ></img>
      </BoxImgHome>
      <AboutMe />
    </Container>
  );
};
