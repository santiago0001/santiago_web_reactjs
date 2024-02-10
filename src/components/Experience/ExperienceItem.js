import { Box, Typography } from "@mui/material";
import React from "react";
import {
  ExperienceItemDescription,
  ExperienceItemTitle,
} from "./Experience.styled";

export const ExperienceItem = ({ item }) => {
  const { title, description } = item;
  return (
    <Box mb={5}>
      <ExperienceItemTitle>
        <Typography fontWeight={700} fontSize={24} m={1} ml={3}>
          {title}
        </Typography>
      </ExperienceItemTitle>
      <ExperienceItemDescription
        dangerouslySetInnerHTML={{ __html: description }}
      ></ExperienceItemDescription>
    </Box>
  );
};
