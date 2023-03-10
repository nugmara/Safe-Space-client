import axios from "axios";

// de este servicio es donde se harán todas las llamadas de backend
const service = axios.create({
  baseURL: "http://localhost:5005/api",
});

// todas las llamadas de este servicio irán acompañadas del Token
service.interceptors.request.use((config) => {
  // ! interceptar la llaada justo al momento de salir para añadile el Token
  // extrar el token del LocalStorage
  const storageToken = localStorage.getItem("authToken");
  const tokenAndType = `Bearer ${storageToken}`;
  if (storageToken) {
    config.headers.authorization = tokenAndType;
  }
  return config;
});

export default service;
