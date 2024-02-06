import { Typography } from "@mui/material";
import React from "react";
import { theme } from "../../theme";
import {
  BoxLogoArsat,
  BoxTrayectoryItem,
  BoxTrayectoryTitle,
  ContainerItemsTrayectory,
} from "../Home.styled";

export const Trajectory = () => {
  return (
    <>
      <Typography
        fontWeight={700}
        fontSize={28}
        color={theme.palette.primary.main}
        textAlign={"center"}
        mb={2}
      >
        Trayectoria
      </Typography>
      <ContainerItemsTrayectory pb={10}>
        <BoxTrayectoryItem>
          <img
            height={120}
            src="./images/logoUTN.png"
            alt="Ejemplo"
            width={118}
          ></img>
          <BoxTrayectoryTitle fontWeight={700} fontSize={28}>
            Estudiante
          </BoxTrayectoryTitle>
        </BoxTrayectoryItem>
        <BoxTrayectoryItem>
          <BoxLogoArsat minHeight={120}>
            <img
              height={37}
              src="./images/logoARSAT.png"
              alt="Ejemplo"
              width={200}
            ></img>
          </BoxLogoArsat>
          <BoxTrayectoryTitle fontWeight={700} fontSize={28}>
            Empleado
          </BoxTrayectoryTitle>
        </BoxTrayectoryItem>

        <BoxTrayectoryItem>
          <BoxLogoArsat minHeight={120}>
            <img
              src="./images/logoCoderHouse.png"
              alt="Ejemplo"
              width={180}
            ></img>
          </BoxLogoArsat>
          <BoxTrayectoryTitle fontWeight={700} fontSize={28}>
            Estudiante
          </BoxTrayectoryTitle>
        </BoxTrayectoryItem>
      </ContainerItemsTrayectory>
    </>
  );
};
