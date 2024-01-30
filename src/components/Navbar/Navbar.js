import { Box, Typography } from "@mui/material";
import { ContainerMenu, ContainerNavbar } from "./Navbar.styled";

export default function Navbar() {
  return (
    <>
      <ContainerNavbar>
        <Box display={"flex"} alignItems={"center"} ml={2}>
          <Box sx={{ borderBottom: "5px solid" }}>
            <Typography
              fontSize={36}
              fontWeight={700}
              sx={{ letterSpacing: "-1px", lineHeight: 1.2 }}
            >
              Santiago Barzola
            </Typography>
          </Box>
        </Box>

        <ContainerMenu>
          <Box mr={4}>Estudios</Box>
          <Box mr={4}>Experiencia</Box>
          <Box mr={4}>Novedades</Box>
          <Box mr={4}>Contacto</Box>
        </ContainerMenu>
      </ContainerNavbar>
    </>
  );
}
