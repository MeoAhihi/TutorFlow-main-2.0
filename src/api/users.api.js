import restConnector from "../connectors/AxiosRestConnector";

export async function getSelfInformation() {
  const response = await restConnector().get("/users");
  return response;
}
