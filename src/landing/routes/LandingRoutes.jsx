import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard, Home, Profile, ProfileEdit } from "../pages";

export const LandingRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />

      {/* perfil */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/edit" element={<ProfileEdit />} />

      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
