export type GetUserSubscription = {
  id: number;
  name: string;
  maxCustomers: number;
  customers: number;
  isSubscriptionLimited: boolean;
};

export type Subscription = {
  id: number;
  name: string;
  maxCustomers: number;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  buttonText: string;
  buttonLink: string;
  compareDescription: string;
  features: string[];
};
