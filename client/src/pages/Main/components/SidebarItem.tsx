import { Stack } from "@mui/material";


type SidebarItemProps = {
  children?: React.ReactNode;
  alignItems: string;
};

export const SidebarItem = ({ children, alignItems }: SidebarItemProps) => {
  return (
    <Stack alignItems={alignItems} sx={{ width: "100%" }}>
      {children}
    </Stack>
  );
};
