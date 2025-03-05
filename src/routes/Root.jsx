import { isExpired, decodeToken } from "react-jwt";
import { useLoaderData } from "react-router";
import { Outlet, redirect } from "react-router-dom";
import { getStudentList } from "../api/students.api";

export async function loader() {
  const jwt = localStorage.getItem("jwt");
  if (!jwt) {
    return redirect("/login");
  }
  if (isExpired(jwt)) {
    return redirect("/login");
  }
  const decoded = decodeToken(jwt);

  const students = await getStudentList();

  return {
    name: decoded.fullname,
    avatarUrl: decoded.avatarUrl,
    id: decoded.id,
    shortname: decoded.shortname,
    studentCount: students.data.length,
  };
}

export default function Root() {
  const { name, studentCount } = useLoaderData();
  return (
    <>
      <h1>Xin chào, {name}</h1>

      <div className="card">
        <p>Bạn có:</p>
        <h1>{studentCount}</h1>
        <p>học sinh</p>
      </div>

      
      <Outlet />
    </>
  );
}
