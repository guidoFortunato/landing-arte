import { Navigate, Route, Routes } from "react-router-dom";
import { LayoutLanding } from "../../landing/layouts";
import { Login, Register } from "../pages";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutLanding />}>

      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      </Route>
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};

{
  /* <Route path="/" element={<LayoutLanding />}>
  <Route index path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
</Route>; */
}
