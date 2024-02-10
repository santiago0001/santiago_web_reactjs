import { Box } from "@mui/material";
import styled from "styled-components";
import { theme } from "../theme";

export const ExperienceItemTitle = styled(Box)(() => ({
  backgroundColor: theme.palette.primary.main,
  minHeight: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
}));

export const ExperienceItemDescription = styled(Box)(() => ({
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(2, 2, 4, 2),
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
}));
