import { Form, redirect } from "react-router";
import { getFormData } from "../utils/formData";

export async function action({ request }) {
  const data = await getFormData(request);
  console.log(data);
  return redirect("/");
}

export default function UpdateUser() {
  return (
    <Form method="post" className="d-flex flex-column">
      <input type="image" src="avatar" alt="avatar" />
      <textarea name="biography" id="biography" />
      <input type="text" name="shortname" id="shortname" />
      <input type="date" name="birthday" id="birthday" />
      <input type="tel" name="phoneNumber" id="phoneNumber" />
      <input type="text" name="address" id="address" />
      <input type="text" name="country" id="country" />

      <button type="submit">Gửi</button>
    </Form>
  );
}
