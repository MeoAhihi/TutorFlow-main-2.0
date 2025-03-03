import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login, { action as loginAction } from "./routes/Login";
import Register, { action as registerAction } from "./routes/Register";
import Root, { loader as rootLoader } from "./routes/Root";
import UpdateUser, { action as updateUserAction } from "./routes/UpdateUser";

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
    path: "/user/:id/edit",
    action: updateUserAction,
    element: <UpdateUser />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
