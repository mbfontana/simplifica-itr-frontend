import { useState, cloneElement } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import { useScrollTrigger } from "@mui/material";
import { Outlet } from "react-router-dom";

type NavBarProps = {
  children?: React.ReactElement;
};

function ElevationScroll(props?: any) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 3 : 0,
  });
}

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const NavBar = (props?: any) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ElevationScroll {...props}>
      <AppBar sx={{ backgroundColor: "white", color: "black", height: "80px" }}>
        <Container maxWidth="lg" sx={{ height: "100%", mt: "10px" }}>
          <Toolbar disableGutters>
            <Box
              component="img"
              src="logo.svg"
              alt="Logo"
              width="200px"
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              {loggedIn ? (
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                <></>
              )}

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography variant="h3" textAlign="center">
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              component="img"
              src="logo.svg"
              alt="Logo"
              width="200px"
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 2,
              }}
            />
            <Box
              height="100%"
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    height: "100%",
                  }}
                >
                  <Typography variant="h3">{page}</Typography>
                </Button>
              ))}
            </Box>
            {loggedIn ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <></>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};
