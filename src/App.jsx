import "./App.css";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Accueil from "./pages/accueil/Accueil";

function App() {
  const Layout = () => {
    return (
      <>
        <NavBar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/blog",
          element: <Home />,
        },
        {
          path: "/detail/:id",
          element: <Details />,
        },
        {
          path: "/",
          element: <Accueil />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
