export type GetUserSubscription = {
  id: number;
  name: string;
  maxCustomers: number;
  customers: number;
  isSubscriptionLimited: boolean;
};
