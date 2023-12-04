import { Grid, Stack, useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";
import { GreenButton } from "./GreenButton";
import { NavLink } from "./NavLink";
import { MenuBurger } from "./MenuBurger";
import { useNavigate } from "react-router-dom";

const pages = [
  { text: "Sobre", url: "#" },
  { text: "Recursos", url: "#" },
  { text: "Planos", url: "/subscriptions" },
];

export const NavBar = () => {
  const navigate = useNavigate();
  const breakPoint = useMediaQuery("(min-width:769px)");

  return (
    <Grid
      height="100%"
      width="100%"
      direction="row"
      alignItems="center"
      container
    >
      <Grid item xs={breakPoint ? 3 : 6}>
        <Box
          component="img"
          src="logo.svg"
          alt="Logo"
          width="200px"
          onClick={() => navigate("/")}
          sx={{ cursor: "pointer" }}
        />
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
              <GreenButton
                sx={{ width: "150px" }}
                onClick={() => navigate("/main")}
              >
                Entre
              </GreenButton>
            </Stack>
          </Grid>
        </>
      ) : (
        <Grid item xs={6}>
          <MenuBurger />
        </Grid>
      )}
    </Grid>
  );
};
