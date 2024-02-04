import { Grid, useMediaQuery } from "@mui/material";
import {
  ButtonMenu,
  ContainerMenu,
  ContainerNavbar,
  LinkHome,
  ContainerTitleWeb,
  ContainerLinkWeb,
  BoxMenuIcon,
} from "./Navbar.styled";
import { theme } from "../theme";
import MenuIcon from "@mui/icons-material/Menu";
import { PopperMenuMobile } from "./PopperMenuMobile";
import { useRef, useState } from "react";

export default function Navbar() {
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const [openPopper, setopenPopper] = useState(false);
  const anchorRef = useRef(null);
  const handleClick = () => {
    setopenPopper(!openPopper);
  };
  const handleClose = (event) => {
    if (anchorRef?.current && anchorRef?.current?.contains(event.target)) {
      return;
    }
    setopenPopper(false);
  };
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
          <BoxMenuIcon onClick={handleClick} ref={anchorRef}>
            <MenuIcon fontSize={"large"} />
          </BoxMenuIcon>
        )}
      </ContainerNavbar>
      {isMd && (
        <PopperMenuMobile
          open={openPopper}
          anchorEl={anchorRef}
          handleClose={handleClose}
        />
      )}
    </>
  );
}
