import { Box } from "@mui/material";
import styled from "styled-components";
import { theme } from "../theme";

export const BoxRightFooter = styled(Box)(() => ({
  width: "30%",
  display: "grid",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    marginTop: 40,
  },
}));

export const BoxLeftFooter = styled(Box)(() => ({
  width: "70%",
  alignSelf: "center",
  alignContent: "center",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginTop: 20,
  },
}));

export const ContainerImgFooter = styled(Box)(() => ({
  width: 200,
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    width: 150,
  },
  [theme.breakpoints.down("sm")]: {
    width: 100,
  },
}));

export const ContainerFooter = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  margin: 40,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    margin: 0,
  },
}));
