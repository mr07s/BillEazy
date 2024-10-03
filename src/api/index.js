import axios from "axios";
import { baseURL } from "../Config/config";
const API = axios.create({ baseURL });
console.log(baseURL);
export default API;
