import { Avatar, Stack, Typography, IconButton } from "@mui/material";
import { theme } from "../../../global/theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import { UserMenu } from "./UserMenu";
import { useSessionStore } from "../../../stores/SessionStore";

export const UserInfo = () => {
  const [user, setUser] = useState({ name: null, email: null });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setUser({
      name: `${useSessionStore.getState().firstName} ${
        useSessionStore.getState().lastName
      }`,
      email: useSessionStore.getState().email,
    });
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      width="100%"
      spacing={1}
    >
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
              {user.name}
            </Typography>
            <IconButton onClick={handleOpen}>
              <ExpandMoreIcon
                sx={{ color: theme.palette.text.secondary, width: "20px" }}
              />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
      <UserMenu open={open} />
    </Stack>
  );
};
