import restConnector from "../connectors/AxiosRestConnector";

export async function login(email, password) {
  const response = await restConnector().post("/auth/login", {
    email,
    password,
  });
  return response;
}

export async function register(email, password, firstName, lastName) {
  const response = await restConnector().post("/auth/register", {
    email,
    password,
    firstName,
    lastName,
  });
  return response;
}
