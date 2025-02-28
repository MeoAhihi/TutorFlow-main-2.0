import axios from "axios";

const restConnector = () => {
  const CreateRestConnector = axios.create({
    baseURL: import.meta.env.VITE_TUTORFLOW_API_URL,
    timeout: 30000,
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer " + localStorage.getItem(import.meta.env.VITE_ACCESS_TOKEN),
    },
  });

  CreateRestConnector.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem(import.meta.env.VITE_ACCESS_TOKEN);
        window.location.replace("/login");
      }
      return Promise.reject(error);
    }
  );

  return CreateRestConnector;
};

export default restConnector;
