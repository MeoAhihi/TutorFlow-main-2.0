import restConnector from "../connectors/AxiosRestConnector";

export async function getStudentList() {
  const response = restConnector().get("/students");
  return response;
}

export async function getStudentById(id) {
  const response = restConnector().get(`/students/${id}`);
  return response;
}
