import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://server-e-commerce-txaw.onrender.com",
  withCredentials: true,
});

export default newRequest;
