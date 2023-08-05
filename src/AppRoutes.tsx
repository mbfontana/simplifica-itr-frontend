import { Cities } from "./pages/Cidades/Cities";
import { Customers } from "./pages/Clientes/Customers";

type AppRoutes = {
  name: string;
  path: string;
  component: React.ReactElement;
};

export const AppRoutes: AppRoutes[] = [
  {
    name: "Clientes",
    path: "clientes",
    component: <Customers />,
  },
  {
    name: "Cities",
    path: "cities",
    component: <Cities />,
  },
];
