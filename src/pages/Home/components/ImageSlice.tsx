import { Box } from "@mui/material";

type ImageSliceProps = {
  image: { url: string; alt: string };
};

export const ImageSlice = ({ image }: ImageSliceProps) => {
  return <Box component="img" src={image.url} alt={image.alt} width="100%" />;
};
