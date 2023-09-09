import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login.tsx";
import Register from "./pages/Register/Register.tsx";
import AuthLayout from "./pages/AuthLayout/AuthLayout.tsx";
import Home from "./pages/Home/Home.tsx";
import Statistics from "./pages/Statistics/Statistics.tsx";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/u" element={<AuthLayout />}>
        <Route path="/u/home" element={<Home />} />
        <Route path="/u/statistics" element={<Statistics />} />
      </Route>
    </Routes>
  );
};

export default App;
