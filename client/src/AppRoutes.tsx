import { Cidades } from "./pages/Cidades/Cidades";
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
    name: "Cidades",
    path: "cidades",
    component: <Cidades />,
  },
];
