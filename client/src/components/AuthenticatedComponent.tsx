import React from "react";

interface AuthenticatedComponentProps {
  children: JSX.Element;
}

export const AuthenticatedBlock = ({
  children,
}: AuthenticatedComponentProps) => {
  const localToken = localStorage.getItem("token");
  const sessionToken = sessionStorage.getItem("token");
  const response = localToken || sessionToken ? children : <></>;
  return response;
};

export const UnauthenticatedBlock = ({
  children,
}: AuthenticatedComponentProps) => {
  const localToken = localStorage.getItem("token");
  const sessionToken = sessionStorage.getItem("token");
  const response = localToken || sessionToken ? <></> : children;
  return response;
};
