import { redirect } from "react-router-dom";

export async function loader() {
  const jwt = localStorage.getItem("jwt");
  if (!jwt) {
    return redirect("/login");
  }
}

export default function Root() {
  return <h1>Welcome back, Wind Li</h1>;
}
