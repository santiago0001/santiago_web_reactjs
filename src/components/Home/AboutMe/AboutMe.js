import { Box, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../theme";

export const AboutMe = () => {
  return (
    <Box m={{ sm: theme.spacing(8, 10), xs: 5 }} sx={{ textAlign: "center" }}>
      <Typography
        fontWeight={700}
        fontSize={28}
        color={theme.palette.primary.main}
        mb={2}
      >
        Sobre Santiago
      </Typography>
      <Typography fontWeight={700} fontSize={18}>
        Soy Técnico Universitario en Sistemas Informáticos con 2 años de
        experiencia en el mercado. Durante ese tiempo realice desarrollos para
        distintos proyectos, con diferentes tecnologías y grupos de trabajo
        diversos en la empresa
      </Typography>
    </Box>
  );
};
