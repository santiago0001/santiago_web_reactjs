import { Box, Link } from "@mui/material";
import styled from "styled-components";
import { theme } from "../theme";
import { Z_INDEX } from "../../utils/constants";

export const ContainerNavbar = styled(Box)({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  boxShadow: "-3px 13px 20px -8px rgba(0,0,0,0.16)",
  height: 80,
  color: theme.palette.primary.main,
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
  zIndex: Z_INDEX?.MEDIUM,
});

export const ContainerMenu = styled(Box)({
  height: 55,
  alignItems: "flex-end",
  display: "flex",
  fontWeight: 600,
});

export const ButtonMenu = styled(Link)(({ bt }) => ({
  marginRight: 10,
  cursor: "pointer",
  textDecoration: bt ? "underline solid red" : "none !important",
  textDecorationThickness: "4px !important",
  textDecorationColor: `${theme.palette.primary.main} !important`,
  textDecorationSkipInk: "none",
  textUnderlinePosition: "under",
}));

export const LinkHome = styled(Link)({
  letterSpacing: "-1px",
  lineHeight: 1.2,
  textDecoration: "none !important",
  [theme.breakpoints.down("sm")]: {
    fontSize: "8vw !important",
  },
});

export const ContainerTitleWeb = styled(Box)({
  placeContent: "center",
  display: "flex",
  alignItems: "center",
  marginLeft: theme.spacing(2),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    width: "80%",
    height: "100%",
  },
});
export const ContainerLinkWeb = styled(Box)(({ borderBottom }) => ({
  borderBottom: borderBottom ? "5px solid" : "5px solid white",
}));

export const BoxMenuMobile = styled(Box)(({ borderBottom }) => ({
  backgroundColor: theme.palette.common.white,
  width: "100%",
  height: 50,
  borderTop: `1px solid ${theme.palette.primary.main}`,
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  borderBottom: borderBottom ? `1px solid ${theme.palette.primary.main}` : "",
  justifyContent: "center",
  fontWeight: 600,
  fontSize: 18,
}));

export const ButtonMenuMobile = styled(Link)({
  marginRight: 10,
  textDecoration: "none !important",
  width: "100%",
});

export const BoxMenuIcon = styled(Box)(() => ({
  display: "flex",
  height: 80,
  width: 50,
  alignItems: "center",
}));
