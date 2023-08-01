import { Grid } from "@mui/material";
import { ImageSlice } from "./ImageSlice";
import { TextImageCardProps } from "./TextImageCard";
import { TextSlice } from "./TextSlice";

export const SmallSizeCard = ({
  title,
  text,
  redirect,
  image,
}: TextImageCardProps) => {
  return (
    <>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
      >
        <ImageSlice image={image} />
      </Grid>
      <Grid item xs={12}>
        <TextSlice title={title} text={text} redirect={redirect} />
      </Grid>
    </>
  );
};
