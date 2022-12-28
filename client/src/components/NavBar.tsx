import {
  Button,
  Grid,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box, BoxProps } from "@mui/material";
import { useState } from "react";
import { theme } from "../global/theme";
import useScrolPosition from "../hooks/useScrollPosition";
import { GreenButton } from "./GreenButton";
import { NavLink } from "./NavLink";
import { styled } from "styled-components";
import { MenuBurger } from "./MenuBurger";

const pages = [
  { text: "Sobre", url: "#" },
  { text: "Recursos", url: "#" },
  { text: "Planos", url: "#" },
];

export const NavBar = () => {
  const scrollPosition = useScrolPosition();
  const breakPoint = useMediaQuery("(min-width:769px)");

  return (
    <Box
      height="80px"
      p="0 30px"
      sx={{
        backgroundColor: theme.palette.background.default,
        boxShadow: scrollPosition > 30 ? "0 2px 10px 0 rgb(0 0 0 / 10%)" : "",
        transition: "all ease 0.5s",
      }}
    >
      <Grid
        height="100%"
        width="100%"
        direction="row"
        alignItems="center"
        container
      >
        <Grid item xs={breakPoint ? 3 : 6}>
          <Box component="img" src="logo.svg" alt="Logo" width="200px" />
        </Grid>

        {breakPoint ? (
          <>
            <Grid item xs={6}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                height="100%"
                spacing={6}
              >
                {pages.map((page) => (
                  <NavLink url={page.url} text={page.text} />
                ))}
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                height="100%"
                spacing={2}
              >
                <NavLink url="#" text="Ajuda" />
                <GreenButton sx={{ width: "150px" }}>Entre</GreenButton>
              </Stack>
            </Grid>
          </>
        ) : (
          <Grid item xs={6}>
            <MenuBurger />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
