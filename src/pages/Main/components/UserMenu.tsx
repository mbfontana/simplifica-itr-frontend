import {
  Avatar,
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
import { useNavigate } from "react-router-dom";
import { Transition } from "../../../components/Transition";
import { LogoutPopup } from "./LogoutPopup";
import { useEffect, useState } from "react";

type UserMenuProps = {
  open: boolean;
};

export const UserMenu = ({ open }: UserMenuProps) => {
  const [user, setUser] = useState({ name: null, email: null });
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);

  useEffect(() => {
    setUser({
      name: `${useSessionStore.getState().firstName} ${
        useSessionStore.getState().lastName
      }`,
      email: useSessionStore.getState().email,
    });
  }, []);

  const handleOpenLogoutDialog = () => {
    setOpenLogoutDialog(true);
  };

  const handleCloseLogoutDialog = () => {
    setOpenLogoutDialog(false);
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
                <Avatar alt="" src="" sx={{ width: "30px", height: "30px" }} />

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
          <Dialog
            open={openLogoutDialog}
            onClose={handleCloseLogoutDialog}
            TransitionComponent={Transition}
          >
            <LogoutPopup />
          </Dialog>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
