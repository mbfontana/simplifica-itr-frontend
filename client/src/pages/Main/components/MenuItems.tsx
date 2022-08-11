import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapIcon from '@mui/icons-material/Map';
import GroupsIcon from "@mui/icons-material/Groups";
import { theme } from "../../../global/theme.tsx";
import { SidebarNavigation } from "./SidebarNavigation.tsx";
import { SidebarNavigationRow } from "./SidebarNavigationRow.tsx";

export const MenuItems = () => {
  return (
    <SidebarNavigation>
      <SidebarNavigationRow text="Home">
        <HomeIcon />
      </SidebarNavigationRow>
      <SidebarNavigationRow text="Clientes">
        <GroupsIcon />
      </SidebarNavigationRow>
      <SidebarNavigationRow text="Cidades">
        <MapIcon />
      </SidebarNavigationRow>
    </SidebarNavigation>
  );
};
