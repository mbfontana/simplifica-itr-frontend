import { Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { Main } from "./pages/Main/Main";
import { HomeLayout } from "./components/HomeLayout";
import { CheckAuthentication } from "./components/CheckAuthentication";
import { AppRoutes } from "./AppRoutes";
import { Cidades } from "./pages/Cidades/Cidades";
import { Clientes } from "./pages/Clientes/Clientes";

const App = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="login" element={<Login />} />

      <Route path="main/*" element={<CheckAuthentication />}>
        <Route index element={<Main />} />
        <Route path="cidades" element={<Cidades />} />
        <Route path="clientes" element={<Clientes />} />
        {/* <Route index element={<Main />} />
        {AppRoutes.map((routes) => (
          <Route
            key={routes.path}
            path={routes.path}
            element={routes.component}
          />
        ))} */}
      </Route>
    </Routes>
  );
};

export default App;
