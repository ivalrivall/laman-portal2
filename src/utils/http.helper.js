import axios from "axios";
import { store } from "../store.js";
const customAxios = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.VUE_APP_BACKEND_URL,
  headers: {
    "Content-type": "application/json",
    Authorization: localStorage.getItem("allstar_token")
      ? "Bearer " + localStorage.getItem("allstar_token")
      : "",
  },
});

const requestHandler = (request) => {
  return request;
};

const responseHandler = (response) => {
  if (response.status === 401) {
    store.dispatch("auth/logout");
  }
  return response;
};

const errorHandler = (error) => {
  if (error.response.status === 401) {
    store.dispatch("auth/logout");
  }
  return Promise.reject(error);
};

customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default customAxios;
