import { Grid } from "@mui/material";
import { ImageSlice } from "./ImageSlice";
import { TextImageCardProps } from "./TextImageCard";
import { TextSlice } from "./TextSlice";

type NormalSizeCardProps = TextImageCardProps & { reverse: boolean };

export const NormalSizeCard = ({
  reverse,
  image,
  icon,
  title,
  text,
  redirect,
}: NormalSizeCardProps) => {
  return (
    <>
      {reverse ? (
        <Grid
          item
          xs={6}
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
        >
          <ImageSlice image={image} />
        </Grid>
      ) : (
        <></>
      )}
      <Grid item xs={6}>
        <TextSlice icon={icon} title={title} text={text} redirect={redirect} />
      </Grid>
      {!reverse ? (
        <Grid
          item
          xs={6}
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
        >
          <ImageSlice image={image} />
        </Grid>
      ) : (
        <></>
      )}
    </>
  );
};
