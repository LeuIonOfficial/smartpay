import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login.tsx";
import Register from "./pages/Register/Register.tsx";
import AuthLayout from "./pages/AuthLayout/AuthLayout.tsx";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/u" element={<AuthLayout />}></Route>
    </Routes>
  );
};

export default App;
