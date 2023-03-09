import { Navigate, Route, Routes } from "react-router-dom";
import { LayoutLanding } from "../layouts";
import { Dashboard, Home, Profile, ProfileEdit } from "../pages";

export const LandingRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutLanding />}>
        <Route path="/" index element={<Home />} />
        {/* perfil */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />
      </Route>
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
