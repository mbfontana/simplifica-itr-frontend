import { useSessionStore } from "../stores/SessionStore";

interface AuthenticatedComponentProps {
  children: JSX.Element;
}

export const AuthenticatedBlock = ({
  children,
}: AuthenticatedComponentProps) => {
  const authToken = useSessionStore.getState().token;
  const response = authToken ? children : <></>;
  return response;
};

export const UnauthenticatedBlock = ({
  children,
}: AuthenticatedComponentProps) => {
  const authToken = useSessionStore.getState().token;
  const response = authToken ? <></> : children;
  return response;
};
