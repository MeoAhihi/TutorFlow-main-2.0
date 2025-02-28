import { Form, redirect } from "react-router";
import { login } from "../api/auth.api";

async function getFormData(request) {
  const formData = await request.formData();
  return Object.fromEntries(formData);
}

export async function action({ request }) {
  const data = await getFormData(request);
  const response = await login(data.email, data.password);
  if (response.status === 200) {
    const { accessToken } = await response.data;
    localStorage.setItem("jwt", accessToken);
    return redirect("/");
  }
  return null;
}

export default function Login() {
  return (
    <Form method="post">
      <input type="email" name="email" id="email" />
      <input type="password" name="password" id="password" />
      <button type="submit">Login</button>
    </Form>
  );
}
