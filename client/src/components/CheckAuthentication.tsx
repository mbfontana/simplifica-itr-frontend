import { Navigate, useLocation } from "react-router-dom";
import { MainLayout } from "../pages/Main/components/MainLayout";
import {
  AuthenticatedBlock,
  UnauthenticatedBlock,
} from "./AuthenticatedComponent";

export const CheckAuthentication = () => {
  const location = useLocation();
  return (
    <>
      <AuthenticatedBlock>
        <MainLayout />
      </AuthenticatedBlock>

      <UnauthenticatedBlock>
        <Navigate to="/login" state={{ from: location }} />
      </UnauthenticatedBlock>
    </>
  );
};
