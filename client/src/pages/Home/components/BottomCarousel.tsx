import { Stack, Typography, Box } from "@mui/material";
import { useState } from "react";

type Object = {
  title: string;
  text: string;
};

type BottomCarouselProps = {
  texts: Object[];
};

export const BottomCarousel = ({ texts }: BottomCarouselProps) => {
  const [selectedDot, setSelectecDot] = useState(0);

  const handleDotClick = (dotNumber) => {
    setSelectecDot(dotNumber);
  };

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      spacing={2}
      mt={2}
    >
      <Typography variant="h3" fontSize="18px">
        {texts[selectedDot].title}
      </Typography>
      <Typography variant="body1" fontSize="16px">
        {texts[selectedDot].text}
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={3}
        pt="10px"
      >
        <Box
          width="10px"
          height="10px"
          onClick={() => handleDotClick(0)}
          sx={{
            borderRadius: "100px",
            backgroundColor: selectedDot === 0 ? "black" : "#d0d0d0",
          }}
        />
        <Box
          width="10px"
          height="10px"
          onClick={() => handleDotClick(1)}
          sx={{
            borderRadius: "100px",
            backgroundColor: selectedDot === 1 ? "black" : "#d0d0d0",
          }}
        />
        <Box
          width="10px"
          height="10px"
          onClick={() => handleDotClick(2)}
          sx={{
            borderRadius: "100px",
            backgroundColor: selectedDot === 2 ? "black" : "#d0d0d0",
          }}
        />
        <Box
          width="10px"
          height="10px"
          onClick={() => handleDotClick(3)}
          sx={{
            borderRadius: "100px",
            backgroundColor: selectedDot === 3 ? "black" : "#d0d0d0",
          }}
        />
      </Stack>
    </Stack>
  );
};
