import { Form, Link, redirect, useLoaderData } from "react-router";
import { deleteAccount, getSelfInformation } from "../api/users.api";
import { useState } from "react";
import { Modal } from "react-bootstrap"; // Assuming you have a Modal component
import { getFormData } from "../utils/formData";
import { getStudentById } from "../api/students.api";

export async function action({ request }) {
  const data = await getFormData(request);
  if (request.method === "post" && request.type === "destroy") {
    const response = await deleteAccount();
  }
  localStorage.removeItem("jwt");
  return redirect("/login");
}

export async function loader() {
  const userInfo = await getSelfInformation();
  return {
    data: userInfo.data,
    editPath: "/user/edit",
  };
}
export async function StudentLoader({ params }) {
  const studentInfo = await getStudentById(params.id);
  console.log(studentInfo);
  return {
    data: studentInfo.data,
    editPath: `/student/edit/${studentInfo.data.id}`,
  };
}

export default function Profile() {
  const { data, editPath } = useLoaderData();
  return (
    <>
      <table>
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr key={key}>
              <th>{key}</th>
              <td>
                {key === "avatarUrl" ? <img src={value} alt="Avatar" /> : value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={editPath}>Chỉnh sửa</Link>
      <DeleteButton>Xóa Tài khoản</DeleteButton>
    </>
  );
}

function DeleteButton({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={handleDeleteClick}>{children}</button>

      <Modal onClose={handleCloseModal} show={isModalOpen}>
        <p>Bạn có chắc sẽ xóa tài khoản của mình?</p>
        <button onClick={handleCloseModal}>Thoát</button>
        <Form method="POST">
          <input type="hidden" name="type" value={"destroy"} />
          <button type="submit">Xác nhận</button>
        </Form>
      </Modal>
    </>
  );
}
