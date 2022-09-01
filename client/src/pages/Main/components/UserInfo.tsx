import {
  Avatar,
  Button,
  Stack,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { theme } from "../../../global/theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

export const UserInfo = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      padding="24px 24px 0 24px"
    >
      <Avatar alt="" src="" />
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={0}
      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={0}
        >
          <Typography
            variant="body2"
            sx={{ color: theme.palette.text.secondary }}
          >
            Valmir Advocacia
          </Typography>
          <IconButton onClick={handleOpen}>
            <ExpandMoreIcon
              sx={{ color: theme.palette.text.secondary, width: "20px" }}
            />
          </IconButton>
        </Stack>
      </Stack>
      {open === true ? (
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      ) : (
        <></>
      )}
    </Stack>
  );
};
