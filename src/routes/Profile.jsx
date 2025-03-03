import { useLoaderData } from "react-router";
import { getSelfInformation } from "../api/users.api";
import { useState } from "react";
import { Modal } from "react-bootstrap"; // Assuming you have a Modal component

export async function loader() {
  const userInfo = await getSelfInformation();
  return {
    ...userInfo.data,
  };
}

export default function Profile() {
  const data = useLoaderData();
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
      <DeleteButton />
    </>
  );
}

function DeleteButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={handleDeleteClick}>Delete</button>

      <Modal onClose={handleCloseModal} show={isModalOpen}>
        <p>Are you sure you want to delete?</p>
        <button onClick={handleCloseModal}>Cancel</button>
        <button>Confirm</button>
      </Modal>
    </>
  );
}
