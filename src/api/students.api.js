import restConnector from "../connectors/AxiosRestConnector";

export async function getStudentList() {
  const response = restConnector().get("/students");
  return response;
}
