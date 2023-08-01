import { Cities } from "./pages/Cidades/Cities";
import { Clientes } from "./pages/Clientes/Clientes";

type AppRoutes = {
  name: string;
  path: string;
  component: React.ReactElement;
};

export const AppRoutes: AppRoutes[] = [
  {
    name: "Clientes",
    path: "clientes",
    component: <Clientes />,
  },
  {
    name: "Cities",
    path: "cities",
    component: <Cities />,
  },
];
