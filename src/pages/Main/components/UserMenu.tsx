import {
  Avatar,
  Box,
  Dialog,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import { theme } from "../../../global/theme";
import LogoutIcon from "@mui/icons-material/Logout";
import CheckIcon from "@mui/icons-material/Check";
import { useSessionStore } from "../../../stores/SessionStore";
import { Transition } from "../../../components/Transition";
import { LogoutPopup } from "./LogoutPopup";
import { ReactNode, useEffect, useState } from "react";

type UserMenuProps = {
  open: boolean;
  user: { name: string; email: string; avatar: string };
};

export const UserMenu = ({ open, user }: UserMenuProps) => {
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);

  const handleOpenLogoutDialog = () => {
    setOpenLogoutDialog(true);
  };

  return (
    <>
      {open ? (
        <>
          <List
            sx={{
              width: "107%",
              backgroundColor: "white",
              border: `1px solid ${theme.palette.text.secondary}`,
              borderRadius: "3px",
              boxShadow: "0 0 6px rgba(0,0,0,.3)",
              padding: "12px 0px",
              zIndex: 2,
            }}
          >
            <Stack sx={{ padding: "8px 16px" }}>
              <Typography variant="body2" color="#A6A6A6">
                CONTA
              </Typography>
              <Stack direction="row" spacing={2} sx={{ padding: "8px 0" }}>
                <CheckIcon
                  sx={{ width: "24px", color: theme.palette.primary.main }}
                />
                <Avatar
                  alt="profile picture"
                  sx={{
                    width: "30px",
                    height: "30px",
                    bgcolor: theme.palette.info.main,
                    fontSize: "16px",
                  }}
                >
                  {user.avatar}
                </Avatar>
                <Stack>
                  <Typography fontSize="16px" fontWeight={500} color="#A6A6A6">
                    {user.name}
                  </Typography>
                  <Typography fontSize="12px" fontWeight={400} color="#A6A6A6">
                    {user.email}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Divider />
            <ListItem sx={{ padding: "8px 0" }}>
              <ListItemButton>
                <Typography variant="body2">Informações da conta</Typography>
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem sx={{ padding: "8px 0" }}>
              <ListItemButton onClick={handleOpenLogoutDialog}>
                <LogoutIcon
                  sx={{ fontSize: "0.975rem", color: theme.palette.error.main }}
                />
                <Typography variant="body2" marginLeft={1}>
                  Sair de {user.name}
                </Typography>
              </ListItemButton>
            </ListItem>
          </List>
          <Dialog open={openLogoutDialog} TransitionComponent={Transition}>
            <LogoutPopup />
          </Dialog>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
