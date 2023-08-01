import { Stack, Typography } from "@mui/material";

type Object = {
  title: string;
  text: string;
};

type SideCarouselProps = {
  texts: Object[];
};

export const SideCarousel = ({ texts }: SideCarouselProps) => {
  return (
    <Stack spacing={4}>
      {texts.map((e) => (
        <Stack spacing={2}>
          <Typography variant="h3" fontSize="18px">
            {e.title}
          </Typography>
          <Typography variant="body1" fontSize="16px">
            {e.text}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};
