import Login from "./Login";
import Home from "./Home";
import About from "./About";

import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);

  return (
    <>
      <nav>
        <a href="/">Home</a> <a href="/about">About</a>{" "}
        <a href="/login">Login</a>
        {/*
        <Link to="/login">Login</Link>
        <Link to="/about">About</Link> */}
      </nav>
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  );
};

export default App;
