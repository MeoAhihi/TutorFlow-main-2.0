import { Outlet, redirect } from "react-router-dom";

export async function loader() {
  const jwt = localStorage.getItem("jwt");
  if (!jwt) {
    return redirect("/login");
  }
}

export default function Root() {
  return (
    <>
      <h1>Xin chào, Lý Vĩ Phong</h1>
      <Outlet />
    </>
  );
}
