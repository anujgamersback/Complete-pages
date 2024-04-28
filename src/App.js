import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import ProfileDetailScreen from "./pages/profile-detail-screen";
import Layout from "./pages/Layout";
import Changebox from "./components/Changebox";
import ScoutPlayers from "./pages/ScoutPlayers";


function AppInner() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="ProfileDetailScreen" replace /> },
      {
        path: "/ProfileDetailScreen", element: <ProfileDetailScreen />,
        children: [
          { index: true, element: <Navigate to="/ProfileDetailScreen/Maps" replace /> },
          { path: "Maps", element: <Changebox option={"Maps"} /> },
          { path: "Agents", element: <Changebox option={"Agents"} /> },
          { path: "Weapons", element: <Changebox option={"Weapons"} /> },
        ],
      },
      {
        path: "ScoutPlayers", element: <ScoutPlayers />,
        children: [
          { index: true, element: <Navigate to="/ScoutPlayers/profile" replace /> },
          { path: "profile", element: <Changebox option={"profile"} /> },

        ],
      },
    ]
  }
],
)



function App() {
  return (
    <RouterProvider router={router}>
      <AppInner />
    </RouterProvider>
  );
}
export default App;
