import { useAuth0 } from "@auth0/auth0-react";

export const Login = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  return (
    <>
      <h2>{isAuthenticated && user?.name}</h2>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
    </>
  );
};
