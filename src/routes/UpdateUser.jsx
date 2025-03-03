import { Form, redirect, useLoaderData } from "react-router";
import { getFormData } from "../utils/formData";
import { editSelfInformation } from "../api/users.api";

export async function action({ request }) {
  const data = await getFormData(request);
  // if (!data.avatarUrl.match(/\.(jpeg|jpg|gif|png)$/)) {
  //   throw new Error("Avatar must be an image file (jpeg, jpg, gif, png).");
  // }
  const {
    biography,
    fullname,
    shortname,
    birthday,
    // email,
    phoneNumber,
    address,
    country,
  } = data;
  console.log(data);
  if (typeof biography !== "string") {
    throw new Error("Biography must be a string.");
  }
  if (typeof fullname !== "string") {
    throw new Error("Fullname must be a string.");
  }
  if (typeof shortname !== "string") {
    throw new Error("Shortname must be a string.");
  }
  if (isNaN(Date.parse(birthday))) {
    throw new Error("Birthday must be a valid date.");
  }
  // if (typeof email !== "string" || !email.includes("@")) {
  //   throw new Error("Email must be a valid email address.");
  // }
  if (typeof phoneNumber !== "string") {
    throw new Error("Phone number must be a string.");
  }
  if (typeof address !== "string") {
    throw new Error("Address must be a string.");
  }
  if (typeof country !== "string") {
    throw new Error("Country must be a string.");
  }
  // Additional validation logic can be added here if needed
  const today = new Date();
  const birthDate = new Date(birthday);
  if (birthDate > today) {
    throw new Error("Birthday cannot be in the future.");
  }
  const phoneNumberPattern = /^\d{1,14}$/;
  if (!phoneNumberPattern.test(phoneNumber)) {
    throw new Error("Phone number must be a valid international phone number.");
  }
  const response = await editSelfInformation(data);
  return redirect("/user/profile");
}

export default function UpdateUser() {
  const {
    avatarUrl,
    biography,
    fullname,
    shortname,
    birthday,
    email,
    phoneNumber,
    address,
    country,
  } = useLoaderData();

  const formattedBirthday = new Date(birthday).toISOString().split("T")[0];
  return (
    <Form method="post" className="d-flex flex-column">
      <input type="image" src="avatar" alt="avatar" defaultValue={avatarUrl} />
      <textarea name="biography" id="biography" defaultValue={biography} />
      <input
        type="text"
        name="fullname"
        id="fullname"
        defaultValue={fullname}
      />
      <input
        type="text"
        name="shortname"
        id="shortname"
        defaultValue={shortname}
      />
      <input
        type="date"
        name="birthday"
        id="birthday"
        defaultValue={formattedBirthday}
      />
      <input
        type="text"
        name="email"
        id="email"
        disabled
        defaultValue={email}
      />
      <input
        type="tel"
        name="phoneNumber"
        id="phoneNumber"
        defaultValue={phoneNumber}
      />
      <input type="text" name="address" id="address" defaultValue={address} />
      <input type="text" name="country" id="country" defaultValue={country} />

      <button type="submit">Gửi</button>
    </Form>
  );
}
