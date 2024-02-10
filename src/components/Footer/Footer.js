import React from "react";
import { ContainerHome } from "../Home/Home.styled";
import {
  BoxLeftFooter,
  BoxRightFooter,
  ContainerFooter,
  ContainerImgFooter,
} from "./Footer.style";
import { theme } from "../theme";
import { Box, Link } from "@mui/material";
import { ButtonMenu } from "../Navbar/Navbar.styled";
import { routes } from "../../utils/paths";

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
          <Link
            href={"/"}
            fontWeight={800}
            color={theme.palette.primary.main}
            fontSize={{ xs: "7vw", sm: 30, md: 40 }}
            sx={{ textDecoration: "none" }}
          >
            santiagobarzola.com.ar
          </Link>
          <Box mt={4} display={"flex"} justifyContent={"center"}>
            <ContainerImgFooter>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href={routes.linkedin}
                width={{ xs: 40, md: 80 }}
              >
                <img
                  width={"100%"}
                  src="./images/Footer/linkedlin.svg"
                  alt="Ejemplo"
                />
              </Link>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href={routes.mailTo}
                width={{ xs: 45, md: 90 }}
              >
                <img
                  width={"100%"}
                  src="./images/Footer/email.svg"
                  alt="Ejemplo"
                />
              </Link>
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
