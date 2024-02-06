import React from "react";
import { ContainerHome } from "../Home/Home.styled";
import {
  BoxLeftFooter,
  BoxRightFooter,
  ContainerFooter,
  ContainerImgFooter,
} from "./Footer.style";
import { theme } from "../theme";
import { Box, Typography } from "@mui/material";
import { ButtonMenu } from "../Navbar/Navbar.styled";

export const Footer = () => {
  return (
    <ContainerHome
      sx={{
        backgroundColor: theme.palette.common.white,
        display: "flex",
      }}
      maxWidth={"lg"}
    >
      <ContainerFooter>
        <BoxLeftFooter>
          <Typography
            fontWeight={800}
            color={theme.palette.primary.main}
            fontSize={{ xs: "5vw", sm: 21, md: 35 }}
            mt={{ xs: 5, sm: 0 }}
          >
            santiagolucasbarzola.com.ar
          </Typography>
          <Box mt={4} display={"flex"} justifyContent={"center"}>
            <ContainerImgFooter>
              <Box width={{ xs: 40, md: 80 }}>
                <img
                  width={"100%"}
                  src="./images/Footer/linkedlin.svg"
                  alt="Ejemplo"
                />
              </Box>
              <Box width={{ xs: 45, md: 90 }}>
                <img
                  width={"100%"}
                  src="./images/Footer/email.svg"
                  alt="Ejemplo"
                />
              </Box>
            </ContainerImgFooter>
          </Box>
        </BoxLeftFooter>
        <BoxRightFooter>
          <ButtonMenu fontWeight={700} mb={3} href={"/estudios"}>
            Estudios
          </ButtonMenu>
          <ButtonMenu fontWeight={700} mb={3} href={"/experiencia"}>
            Experiencia
          </ButtonMenu>
          <ButtonMenu fontWeight={700} mb={3} href={"/novedades"}>
            Novedades
          </ButtonMenu>
          <ButtonMenu fontWeight={700} mb={3} href={"/contacto"}>
            Contacto
          </ButtonMenu>
        </BoxRightFooter>
      </ContainerFooter>
    </ContainerHome>
  );
};
