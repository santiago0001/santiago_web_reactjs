import { Box, Typography } from "@mui/material";
import { ContainerNavbar } from "./Navbar.styled";

export default function Navbar() {
  return (
    <>
      <ContainerNavbar>
        <Typography>Santiago Barzola</Typography>

        <Box display={"flex"}>
          <Box mr={2}>Estudios</Box>
          <Box mr={2}>Experiencia</Box>
          <Box mr={2}>Novedades</Box>
          <Box mr={2}>Contacto</Box>
        </Box>
      </ContainerNavbar>
    </>
  );
}
