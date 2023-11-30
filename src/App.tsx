import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { Main } from "./pages/Main/Main";
import { CheckAuthentication } from "./components/CheckAuthentication";
import { Cities } from "./pages/Cidades/Cities";
import { Customers } from "./pages/Clientes/Customers";
import { Register } from "./pages/Register/Register";
import { MainLayout } from "./pages/Main/components/MainLayout";
import { PersonalSettings } from "./pages/PersonalSettings/PersonalSettings";
import { Plans } from "./pages/Plans/Plans";

const App = () => {
  const location = useLocation();
  return (
    <Routes>
      <Route index element={<Home />} />
      
      <Route path="planos" element={<Plans />} />

      <Route
        path="login"
        element={
          <CheckAuthentication
            isAuth={<Navigate to="/main" state={{ from: location }} />}
            isNotAuth={<Login />}
          />
        }
      />

      <Route path="register" element={<Register />} />

      <Route
        path="main/*"
        element={
          <CheckAuthentication
            isAuth={<MainLayout />}
            isNotAuth={<Navigate to="/login" state={{ from: location }} />}
          />
        }
      >
        <Route index element={<Main />} />
        <Route path="cities" element={<Cities />} />
        <Route path="clientes" element={<Customers />} />
      </Route>

      <Route
        path="settings"
        element={
          <CheckAuthentication
            isAuth={<PersonalSettings />}
            isNotAuth={<Login />}
          />
        }
      />
    </Routes>
  );
};

export default App;
