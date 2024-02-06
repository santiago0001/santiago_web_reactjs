import React from "react";
import { BoxImgHome, ContainerHome } from "./Home.styled";
import { Container } from "@mui/material";
import { AboutMe } from "./AboutMe/AboutMe";
import { Trajectory } from "./Trajectory/Trajectory";

export const Home = () => {
  return (
    <ContainerHome maxWidth={"lg"}>
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
        <Trajectory />
      </Container>
    </ContainerHome>
  );
};
