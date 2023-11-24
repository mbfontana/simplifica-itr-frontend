import {
  Button,
  Card,
  CardContent,
  Dialog,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { NewCustomer } from "../../Main/components/NewCustomer";
import { useState } from "react";
import { Transition } from "../../../components/Transition";
import { getUserSubscription } from "../../../api/Subscription";
import { LoadingSpinner } from "../../../components/LoadingSpinner";
import { GetUserSubscription } from "../../../api/Subscription/types";
import { SubscriptionLimited } from "./SubscriptionLimited";

export const CreateCustomerBtn = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [isSubscriptionLimited, setIsSubscriptionLimited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [subscription, setSubscription] = useState<GetUserSubscription>(null);

  const handleOpenDialog = async () => {
    setIsLoading(true);
    const subscriptionResponse = await getUserSubscription();
    const subscription = subscriptionResponse.data;
    setSubscription(subscription);
    setIsSubscriptionLimited(subscription.isSubscriptionLimited);
    setIsLoading(false);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpenDialog}>
        {isLoading ? <LoadingSpinner size={18} /> : <AddIcon />}
      </Button>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        TransitionComponent={Transition}
      >
        {isSubscriptionLimited ? (
          <SubscriptionLimited {...subscription} />
        ) : (
          <NewCustomer />
        )}
      </Dialog>
    </>
  );
};
