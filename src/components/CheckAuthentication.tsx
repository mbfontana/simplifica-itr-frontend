import {
  AuthenticatedBlock,
  UnauthenticatedBlock,
} from "./AuthenticatedComponent";

export const CheckAuthentication = ({ isAuth, isNotAuth }) => {
  return (
    <>
      <AuthenticatedBlock>{isAuth}</AuthenticatedBlock>

      <UnauthenticatedBlock>{isNotAuth}</UnauthenticatedBlock>
    </>
  );
};
