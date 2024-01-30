import { Box } from "@mui/material";
import styled from "styled-components";
import { theme } from "../theme";

export const ContainerNavbar = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  boxShadow: "-3px 13px 20px -8px rgba(0,0,0,0.16)",
  height: 80,
  color: theme.palette.primary.main,
});

export const ContainerMenu = styled(Box)({
  height: 60,
  alignItems: "flex-end",
  display: "flex",
  fontWeight: 600,
});
