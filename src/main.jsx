import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import HomePage from "./pages/HomePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import MovieDetail from "./pages/MovieDetail.jsx";
import RootLayout from "./pages/RootLayout.jsx";
// import TVShowDetail from "./pages/TVShowDetail.jsx";
import ModalProvider from "./context/ModalProvider.jsx";
// import PeoplePage from "./pages/PeoplePage.jsx";

const MovieDetail = lazy(() => import("./pages/MovieDetail.jsx"))
const TVShowDetail = lazy(() => import("./pages/TVShowDetail.jsx"))
const PeoplePage = lazy(() => import("./pages/PeoplePage.jsx"))
const HomePage = lazy(() => import("./pages/HomePage.jsx"))
const router = createBrowserRouter([
  {
    element: <RootLayout />, 
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
      {
        path: '/tv/:id',
        element: <TVShowDetail/>
      },
      {
        path: '/people/:id',
        element: <PeoplePage/>
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <ModalProvider>
    <RouterProvider router={router}></RouterProvider>
  </ModalProvider>
  
);
