import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TypeFormatFlags } from "typescript";
import { theme } from "../../../global/theme";
import { GreenButton } from "../../../components/GreenButton";
import { NavLink } from "./NavLink";

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    height: 0.25rem;
    width: 2rem;
    background-color: ${theme.palette.primary.main};
    border-radius: 4px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const RightNav = styled.div`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  flex-flow: column nowrap;
  background-color: #ffffff;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  /* top: 0; */
  right: 0;
  bottom: 0;
  height: calc(100vh - 80px);
  width: 100vw;
  transition: transform 0.3s ease-in-out;

  ul {
    padding-top: 50px;
  }

  li {
    padding: 18px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    :hover {
      color: green;
    }
  }
`;

const pages = [
  { text: "Sobre", url: "#" },
  { text: "Recursos", url: "#" },
  { text: "Planos", url: "#" },
  { text: "Ajuda", url: "#" },
];

export const MenuBurger = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open}>
        <ul>
          {pages.map((page) => (
            <li>
              <Typography variant="body1" onClick={() => navigate(page.url)}>
                {page.text}
              </Typography>
            </li>
          ))}
        </ul>
        {/* {pages.map((page) => (
          <NavLink url={page.url} text={page.text} />
        ))} */}
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          pt="50px"
          margin="0 100px"
        >
          <GreenButton
            sx={{ width: "100%", height: "60px" }}
            onClick={() => navigate("/login")}
          >
            Entre
          </GreenButton>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 500,
              textDecoration: "underline",
            }}
          >
            Cadastre-se
          </Typography>
        </Stack>
      </RightNav>
    </>
  );
};
