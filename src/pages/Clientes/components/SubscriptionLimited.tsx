import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { GetUserSubscription } from "../../../api/Subscription/types";

export const SubscriptionLimited = (subscription: GetUserSubscription) => {
  return (
    <Card>
      <CardContent>
        <Stack justifyContent="center" alignItems="center" p={1} spacing={2}>
          <Typography mb={2}>
            Você atingiu o máximo de clientes para o plano{" "}
            {subscription.name.toUpperCase()} ({subscription.customers}/
            {subscription.maxCustomers})
          </Typography>
          <Button
            variant="contained"
            component="a"
            href="/planos"
            target="_blank"
          >
            Aprimorar plano
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
