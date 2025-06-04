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
import { useLocation } from "react-router-dom";
import { routes } from "../../utils/paths";

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
  const location = useLocation();
  const getIsRoute = (route) => {
    return location?.pathname === route;
  };

  return (
    <>
      <ContainerNavbar>
        <ContainerTitleWeb>
          <ContainerLinkWeb borderBottom={getIsRoute(routes?.home)}>
            <LinkHome href={"/"} fontSize={36} fontWeight={700}>
              Santiago Barzola
            </LinkHome>
          </ContainerLinkWeb>
        </ContainerTitleWeb>
        {!isMd && (
          <ContainerMenu>
            <Grid container spacing={4} mr={4}>
              <Grid item>
                <ButtonMenu
                  href={routes?.studies}
                  bt={getIsRoute(routes?.studies)}
                >
                  Estudios
                </ButtonMenu>
              </Grid>
              <Grid item>
                <ButtonMenu
                  href={routes?.trayectory}
                  bt={getIsRoute(routes?.trayectory)}
                >
                  Experiencia
                </ButtonMenu>
              </Grid>
              {/* <Grid item>
                <ButtonMenu href={routes?.news} bt={getIsRoute(routes?.news)}>
                  Novedades
                </ButtonMenu>
              </Grid> */}
              {/* <Grid item>
                <ButtonMenu
                  href={routes?.contact}
                  bt={getIsRoute(routes?.contact)}
                >
                  Contacto
                </ButtonMenu>
              </Grid> */}
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
