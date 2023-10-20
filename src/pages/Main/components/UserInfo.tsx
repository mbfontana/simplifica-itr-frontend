import { Avatar, Stack, Typography, IconButton } from "@mui/material";
import { theme } from "../../../global/theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import { UserMenu } from "./UserMenu";
import { useSessionStore } from "../../../stores/SessionStore";

export const UserInfo = () => {
  const [user, setUser] = useState({
    name: null,
    email: null,
    avatar: null,
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setUser({
      name: `${useSessionStore.getState().firstName} ${
        useSessionStore.getState().lastName
      }`,
      avatar: useSessionStore.getState().firstName[0],
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
        onClick={handleOpen}
        sx={{
          ":hover": { cursor: "pointer" },
        }}
      >
        <Avatar alt="profile picture" sx={{ bgcolor: theme.palette.info.main }}>
          {user.avatar}
        </Avatar>
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
              sx={{
                color: theme.palette.text.secondary,
                ":hover": { color: "white" },
              }}
            >
              {user.name}
            </Typography>
            <IconButton>
              <ExpandMoreIcon
                sx={{ color: theme.palette.text.secondary, width: "20px" }}
              />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
      <UserMenu open={open} user={user} />
    </Stack>
  );
};
