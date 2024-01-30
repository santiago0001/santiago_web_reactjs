import { Box, Grid, Link } from "@mui/material";
import {
  ButtonMenu,
  ContainerMenu,
  ContainerNavbar,
  LinkHome,
} from "./Navbar.styled";

export default function Navbar() {
  return (
    <>
      <ContainerNavbar>
        <Box display={"flex"} alignItems={"center"} ml={2}>
          <Box sx={{ borderBottom: "5px solid" }}>
            <LinkHome href={"/"} fontSize={36} fontWeight={700}>
              Santiago Barzola
            </LinkHome>
          </Box>
        </Box>

        <ContainerMenu>
          <Grid container spacing={4} mr={4}>
            <Grid item>
              <ButtonMenu href={"/estudios"}>Estudios</ButtonMenu>
            </Grid>
            <Grid item>
              <ButtonMenu href={"/experiencia"}>Experiencia</ButtonMenu>
            </Grid>
            <Grid item>
              <ButtonMenu href={"/novedades"}>Novedades</ButtonMenu>
            </Grid>
            <Grid item>
              <ButtonMenu href={"/contacto"}>Contacto</ButtonMenu>
            </Grid>
          </Grid>
        </ContainerMenu>
      </ContainerNavbar>
    </>
  );
}
