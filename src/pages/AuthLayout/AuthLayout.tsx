import { Navigate, Outlet } from "react-router-dom";
import LoggedIn from "./LoggedIn.tsx";

const AuthLayout = () => {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return (
      <>
        <LoggedIn>
          <Outlet />
        </LoggedIn>
      </>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default AuthLayout;
