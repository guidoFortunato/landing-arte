import { Navigate, Route, Routes } from "react-router-dom";
import { NotFound } from "../components";
import { LayoutPublic } from "../layouts";
import { Home, Login, Register } from "../pages";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutPublic />}>
          {/* Rutas inicio */}
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="/error" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/error" />} />

        {/* Rutas perfil */}

        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      <Route path="/profile/edit" element={<ProfileEdit />} /> */}
      </Routes>
    </>
  );
};
