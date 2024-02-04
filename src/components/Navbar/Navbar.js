import { Box, Grid, useMediaQuery } from "@mui/material";
import {
  ButtonMenu,
  ContainerMenu,
  ContainerNavbar,
  LinkHome,
  ContainerTitleWeb,
  ContainerLinkWeb,
} from "./Navbar.styled";
import { theme } from "../theme";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <ContainerNavbar>
        <ContainerTitleWeb>
          <ContainerLinkWeb>
            <LinkHome href={"/"} fontSize={36} fontWeight={700}>
              Santiago Barzola
            </LinkHome>
          </ContainerLinkWeb>
        </ContainerTitleWeb>
        {!isMd && (
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
        )}
        {isMd && (
          <Box
            sx={{
              // position: "absolute",
              // right: 0,
              display: "flex",
              height: 80,
              width: 50,
              alignItems: "center",
            }}
          >
            <MenuIcon fontSize={"large"} />
          </Box>
        )}
      </ContainerNavbar>
    </>
  );
}
