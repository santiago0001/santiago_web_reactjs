import { Box, ClickAwayListener, Popper } from "@mui/material";
import React from "react";
import { BoxMenuMobile, ButtonMenuMobile } from "./Navbar.styled";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { theme } from "../theme";

export const PopperMenuMobile = ({ anchorEl, open, handleClose }) => {
  return (
    <Popper sx={{ width: "100%" }} open={open} anchorEl={anchorEl.current}>
      <ClickAwayListener onClickAway={handleClose}>
        <Box sx={{ bgcolor: "background.paper", paddingTop: 0 }}>
          <BoxMenuMobile>
            <ButtonMenuMobile href={"/estudios"}>Estudios</ButtonMenuMobile>
          </BoxMenuMobile>
          <BoxMenuMobile>
            <ButtonMenuMobile href={"/experiencia"}>
              Experiencia
            </ButtonMenuMobile>
          </BoxMenuMobile>
          <BoxMenuMobile>
            <ButtonMenuMobile href={"/novedades"}>Novedades</ButtonMenuMobile>
          </BoxMenuMobile>
          <BoxMenuMobile>
            <ButtonMenuMobile href={"/contacto"}>Contacto</ButtonMenuMobile>
          </BoxMenuMobile>
          <BoxMenuMobile borderBottom>
            <Box onClick={handleClose}>
              <KeyboardArrowUpIcon
                fontSize={"large"}
                sx={{ color: theme.palette.primary.main }}
              />
            </Box>
          </BoxMenuMobile>
        </Box>
      </ClickAwayListener>
    </Popper>
  );
};
