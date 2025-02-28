import { Form, redirect } from "react-router";
import { getFormData } from "../utils/formData";

function isValidEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

export async function action({ request }) {
  const data = await getFormData(request);
  if (data.password !== data.passwordConfirmation) {
    console.log("Passwords are not matched");
    return null;
  }
  if (data.password.length < 8) {
    console.log("Password must be 8 characters or longer");
    return null;
  }
  if (!isValidEmail(data.email)) {
    console.log("Email is not valid");
    return null;
  }
  console.log(data);

  return redirect("/user/1/edit");
}

export default function Register() {
  return (
    <Form method="post">
      <input type="text" name="fullname" id="fullname" />
      <input type="email" name="email" id="email" />
      <input type="password" name="password" id="password" />
      <input
        type="password"
        name="passwordConfirmation"
        id="passwordConfirmation"
      />
      <button type="submit">Đăng ký</button>
    </Form>
  );
}
