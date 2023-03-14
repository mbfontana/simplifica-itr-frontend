import { Box, Stack, Typography, Grid, useMediaQuery } from "@mui/material";
import { ReactElement } from "react";
import { FooterNav } from "./FooterNav";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

type NavLinksObject = {
  text: string;
  url: string;
};

type FooterNavLinksType = {
  title: string;
  links: NavLinksObject[];
};

const footerNavLinks: FooterNavLinksType[] = [
  {
    title: "Produto",
    links: [
      { text: "Por que o Simplifica ITR", url: "#" },
      { text: "Simplifica ITR Free", url: "#" },
      { text: "Simplifica ITR Professional", url: "#" },
      { text: "Comparar Planos", url: "#" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { text: "Gerenciamento de Clientes", url: "#" },
      { text: "Cálculo do ITR", url: "#" },
      { text: "Pesquisa", url: "#" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { text: "Solucionando Problemas", url: "#" },
      { text: "Ajuda e Aprendizado", url: "#" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { text: "Sobre a Empresa", url: "#" },
      { text: "Fale Conosco", url: "#" },
    ],
  },
];

type FooterNavIconsType = {
  icon: ReactElement;
  url: string;
};

const footerNavIcons: FooterNavIconsType[] = [
  { icon: <Box>icon 1</Box>, url: "#" },
  { icon: <Box>icon 2</Box>, url: "#" },
  { icon: <Box>icon 3</Box>, url: "#" },
  { icon: <Box>icon 4</Box>, url: "#" },
];

export const HomeFooter = () => {
  const mdBreakPoint = useMediaQuery("(min-width:1220px)");

  var margin;
  if (mdBreakPoint) margin = "0 auto 60px auto";
  else margin = "0 40px 60px 40px";

  return (
    <Stack
      display="flex"
      direction="column"
      alignItems="flex-start"
      justifyContent="space-between"
      spacing={4}
      m={margin}
    >
      <Box width="100%" borderBottom="solid 1.5px black" paddingBottom="28px">
        <Box component="img" src="logo.svg" alt="Logo" width="200px" />
      </Box>
      <Grid container>
        {footerNavLinks.map((e, i) => {
          return <FooterNav {...e} key={i} />;
        })}
      </Grid>
      <Stack
        display="flex"
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        spacing={2}
        pb={5}
        width="100%"
        borderBottom="solid 1.5px #888b8d80"
      >
        <a href="#" style={{ color: "#000" }}>
          <InstagramIcon sx={{ width: "22px" }} />
        </a>
        <a href="#" style={{ color: "#000" }}>
          <LinkedInIcon sx={{ width: "22px" }} />
        </a>
        <a href="#" style={{ color: "#000" }}>
          <FacebookIcon sx={{ width: "22px" }} />
        </a>
        <a href="#" style={{ color: "#000" }}>
          <YouTubeIcon sx={{ width: "22px" }} />
        </a>
      </Stack>
      <Typography variant="body2" fontSize="12px">
        <a
          href="https://www.linkedin.com/in/matheusfontana/"
          style={{ textDecoration: "none", color: "#888b8d80" }}
        >
          © 2023 Desenvolvido por Matheus Fontana.
        </a>
      </Typography>
    </Stack>
  );
};
