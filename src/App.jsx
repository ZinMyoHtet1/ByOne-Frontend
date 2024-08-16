import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout/RootLayout";
import { Activity, Challenge, Notification, Profile, Ranking } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to="/activity" /> },
      {
        path: "/activity",
        element: <Activity />,
      },
      {
        path: "/challenge",
        element: <Challenge />,
      },
      {
        path: "/ranking",
        element: <Ranking />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/notifications",
        element: <Notification />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
