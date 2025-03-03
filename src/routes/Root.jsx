import { isExpired, decodeToken } from "react-jwt";
import { useLoaderData } from "react-router";
import { Outlet, redirect } from "react-router-dom";

export async function loader() {
  const jwt = localStorage.getItem("jwt");
  if (!jwt) {
    return redirect("/login");
  }
  if (isExpired(jwt)) {
    return redirect("/login");
  }
  const decoded = decodeToken(jwt);
  return {
    name: decoded.fullname,
    avatarUrl: decoded.avatarUrl,
    id: decoded.id,
    shortname: decoded.shortname,
  };
}

export default function Root() {
  const { name } = useLoaderData();
  return (
    <>
      <h1>Xin chào, {name}</h1>
      <Outlet />
    </>
  );
}
