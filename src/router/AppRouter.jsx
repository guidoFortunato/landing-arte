import { Navigate, Route, Routes } from "react-router-dom";

import { AuthRoutes } from "../auth/routes/";
import { NotFound } from "../components";

import { LandingRoutes } from "../landing/routes/";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* login y registro */}
        <Route path="/auth/*" element={<AuthRoutes />} />

        {/* publucas */}
        <Route path="/*" element={<LandingRoutes />} />

        {/* <Routes path="/error" element={<NotFound />} /> */}
      </Routes>
    </>
  );
};
