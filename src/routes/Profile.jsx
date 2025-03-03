import { useLoaderData } from "react-router";
import { getSelfInformation } from "../api/users.api";

export async function loader() {
  const userInfo = await getSelfInformation();
  return {
    ...userInfo.data,
  };
}

export default function Profile() {
  const data = useLoaderData();
  return (
    <div className="">
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
    </div>
  );
}
