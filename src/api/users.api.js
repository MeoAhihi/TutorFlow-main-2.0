import restConnector from "../connectors/AxiosRestConnector";

export async function getSelfInformation() {
  const response = await restConnector().get("/users");
  return response;
}

export async function editSelfInformation(data) {
  if (!data || typeof data !== "object") {
    throw new Error("Invalid data data");
  }

  const response = await restConnector().patch("/users", data);
  return response;
}

export async function deleteAccount() {
  const response = await restConnector().delete("/users");
  return response;
}
