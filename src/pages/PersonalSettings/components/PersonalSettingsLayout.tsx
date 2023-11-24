import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
} from "@mui/material";
import { theme } from "../../../global/theme";
import SendIcon from "@mui/icons-material/Send";

export const PersonalSettingsLayout = () => {
  return (
    <>
      <Stack
        sx={{
          height: "49px",
          width: "100%",
          backgroundColor: theme.palette.primary.main,
        }}
      ></Stack>
      <Stack
        sx={{
          height: "100%",
          minHeight: "100%",
          minWidth: "216px",
          paddingTop: "49px",
          paddingBottom: "29px",
          float: "left",
          display: "inline",
          backgroundColor: "#E6EAEA",
        }}
      >
        <List
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{
                backgroundColor: "#E6EAEA",
                color: "#9ba9ad",
                fontWeight: 200,
                textTransform: "uppercase",
              }}
            >
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Sent mail" />
              </Stack>
            </ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemText primary="Sent mail" />
          </ListItemButton>
        </List>
      </Stack>
    </>
  );
};
