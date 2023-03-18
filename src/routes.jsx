import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import MapPage from "../src/pages/Map/index.jsx";
import Home from "./pages/Home/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/map/",
    element: <MapPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
