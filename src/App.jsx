import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login, { action as loginAction } from "./routes/Login";
import Register, { action as registerAction } from "./routes/Register";
import Root, { loader as rootLoader } from "./routes/Root";
import UpdateUser, { action as updateUserAction } from "./routes/UpdateUser";
import Profile, { loader as profileLoader } from "./routes/Profile";

const router = createBrowserRouter([
  {
    path: "/login",
    // loader: loginLoader,
    action: loginAction,
    element: <Login />,
  },
  {
    path: "/",
    loader: rootLoader,
    element: <Root />,
  },
  {
    path: "/register",
    action: registerAction,
    element: <Register />,
  },
  {
    path: "/user/edit",
    action: updateUserAction,
    loader: profileLoader,
    element: <UpdateUser />,
  },
  {
    path: "/user/profile",
    loader: profileLoader,
    element: <Profile />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
