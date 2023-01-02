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
      <SidebarNavigationRow text="Home" path="" icon={<HomeIcon />} />
      <SidebarNavigationRow
        text="Clientes"
        path="clientes"
        icon={<GroupsIcon />}
      />
      <SidebarNavigationRow text="Cidades" path="cidades" icon={<MapIcon />} />
    </SidebarNavigation>
  );
};
