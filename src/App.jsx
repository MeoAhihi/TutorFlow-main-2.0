import GlobalPending from "./GlobalPending";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Root, { loader as rootLoader } from "./routes/Root";
import Login, { action as loginAction } from "./routes/Login";

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
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
