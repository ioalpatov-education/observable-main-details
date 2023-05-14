import { createBrowserRouter } from "react-router-dom";
import ServicesDetails from "../components/ServicesDetails";
import ServicesList from "../components/ServicesList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ServicesList />,
    children: [
      {
        path: "/:id/details",
        element: <ServicesDetails />,
      },
    ],
  },
]);
