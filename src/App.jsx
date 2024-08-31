import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  // Navigate,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout/RootLayout";
import {
  Activity,
  Challenge,
  Notification,
  Profile,
  Ranking,
  Squads,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        // element: (
        //   <div
        //     className="full-page"
        //     style={{
        //       backgroundColor: "blue",
        //       display: "flex",
        //       alignItems: "center",
        //       justifyContent: "center",
        //       fontSize: "24px",
        //       fontWeight: 500,
        //       color: "#fff",
        //     }}
        //   >
        //     Welcome
        //   </div>
        // )
        element: <Navigate to="/activity" />,
      },
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
        element: <Navigate to="/ranking/squad" />,
      },
      {
        path: "/ranking/squad",
        element: <Ranking category="squad" />,
      },
      {
        path: "/ranking/player",
        element: <Ranking category="player" />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/notifications",
        element: <Notification />,
      },
      {
        path: "/squads",
        element: <Squads />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
