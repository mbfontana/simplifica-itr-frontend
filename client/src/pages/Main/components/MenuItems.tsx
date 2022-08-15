import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapIcon from "@mui/icons-material/Map";
import GroupsIcon from "@mui/icons-material/Groups";
import { theme } from "../../../global/theme";
import { SidebarNavigation } from "./SidebarNavigation";
import { SidebarNavigationRow } from "./SidebarNavigationRow";

export const MenuItems = () => {
  return (
    <SidebarNavigation>
      <SidebarNavigationRow text="Home" path="">
        <HomeIcon />
      </SidebarNavigationRow>
      <SidebarNavigationRow text="Clientes" path="clientes">
        <GroupsIcon />
      </SidebarNavigationRow>
      <SidebarNavigationRow text="Cidades" path="cidades">
        <MapIcon />
      </SidebarNavigationRow>
    </SidebarNavigation>
  );
};
