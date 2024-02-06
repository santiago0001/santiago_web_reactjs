import { Box, Container } from "@mui/material";
import styled from "styled-components";
import { Z_INDEX } from "../../utils/constants";
import { theme } from "../theme";

export const BoxImgHome = styled(Box)(() => ({
  borderRadius: 20,
  justifyContent: "center",
  display: "flex",
  paddingTop: 30,
}));

export const ContainerHome = styled(Container)(() => ({
  backgroundColor: theme.palette.common.lightSkyBlue,
  zIndex: Z_INDEX?.LOW,
}));

export const ContainerItemsTrayectory = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const BoxTrayectoryItem = styled(Box)(() => ({
  textAlign: "center",
  backgroundColor: theme.palette.common.white,
  width: 250,
  borderRadius: 20,
  [theme.breakpoints.down("md")]: {
    marginBottom: 30,
  },
}));

export const BoxTrayectoryTitle = styled(Box)(() => ({
  fontWeight: 700,
  fontSize: 28,
  paddingBottom: 20,
}));
export const BoxLogoArsat = styled(Box)(() => ({
  alignItems: "center",
  display: "flex",
  placeContent: "center",
}));
