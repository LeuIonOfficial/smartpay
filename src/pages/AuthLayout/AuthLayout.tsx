import { Navigate, Outlet } from "react-router-dom";
import LoggedIn from "./LoggedIn.tsx";
import { useSelector } from "react-redux";

const AuthLayout = () => {
  const { user } = useSelector((store: any) => store.auth);

  if (true) {
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
