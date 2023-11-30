import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";
import { theme } from "../../../global/theme";
import { GreenButton } from "../../../components/GreenButton";
import { useNavigate } from "react-router-dom";

type PlanDescriptionCardProps = {
  title: string;
  monthlyPrice: number;
  anualPrice?: number;
  description: string;
  buttonText: string;
  buttonLink: string;
  compareDescription?: string;
  features: string[];
};

export const PlanDescriptionCard = ({
  title,
  monthlyPrice,
  anualPrice,
  description,
  buttonText,
  buttonLink,
  compareDescription,
  features,
}: PlanDescriptionCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        borderRadius: "10px",
        boxShadow: "none",
        backgroundColor: "#F8F8F8",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
        paddingLeft: "1.25rem",
        paddingRight: "1.25rem",
      }}
    >
      <CardContent sx={{ padding: 0 }}>
        <Typography
          sx={{
            lineHeight: 1.4,
            textTransform: "uppercase",
            fontWeight: 400,
            fontSize: "24px",
            textAlign: "left",
          }}
        >
          {title}
        </Typography>

        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          marginTop={3}
        >
          <Typography
            fontSize="40px"
            fontWeight={500}
          >{`R$${monthlyPrice}`}</Typography>
          <Typography
            fontSize="16px"
            fontWeight={450}
            marginLeft="4px"
            marginTop="10px"
          >
            / MÊS
          </Typography>
        </Stack>

        <Divider sx={{ marginTop: 2 }} />
        <Typography variant="body1" marginTop={2}>
          {description}
        </Typography>
        <GreenButton
          onClick={() => navigate(buttonLink)}
          fullWidth
          sx={{
            marginTop: 2,
            marginBottom: 2,
            fontSize: "16px",
            height: "48px",
          }}
        >
          {buttonText}
        </GreenButton>
        {compareDescription ? (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            spacing={1}
          >
            <ArrowBackIcon color="primary" sx={{ width: "18px" }} />
            <Typography
              textTransform="uppercase"
              fontSize="16px"
              fontWeight={500}
            >
              {compareDescription}
            </Typography>
          </Stack>
        ) : (
          <></>
        )}
        <Box marginTop={1}>
          {features.map((feature) => (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-start"
              spacing={1}
            >
              <CheckIcon color="primary" sx={{ width: "18px" }} />
              <Typography fontSize="16px" fontWeight={400}>
                {feature}
              </Typography>
            </Stack>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
