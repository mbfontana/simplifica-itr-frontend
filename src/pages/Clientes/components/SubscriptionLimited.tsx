import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { GetUserSubscription } from "../../../api/Subscription/types";

export const SubscriptionLimited = (subscription: GetUserSubscription) => {
  return (
    <Card sx={{ overflowY: "auto", padding: 1 }}>
      <CardContent>
        <Typography
          sx={{
            borderBottom: "solid 1px",
            borderColor: "divider",
            paddingBottom: 1,
          }}
        >
          PLANO INSUFICIENTE
        </Typography>
        <Typography marginTop={4} marginBottom={4}>
          Você cadastrou o máximo de clientes para o plano{" "}
          {subscription.name.toUpperCase()}
        </Typography>
        <Button
          variant="contained"
          component="a"
          href="/subscriptions"
          target="_blank"
        >
          Aprimorar Plano
        </Button>
      </CardContent>
    </Card>
  );
};
