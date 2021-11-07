import * as axios from "axios";
import { BASE_API } from "./config";

const getTasks = async function() {
    try {
      const response = await axios.get(`${BASE_API}/jobs`);       
      let parseResponse = parseItem(response);
      return parseResponse.data;
    } catch (error) {
      return {};
    }
  };

  export const parseItem = (response) => {
    if (response.status !== 200) throw Error(`custom-error: ${response.message} with status: ${response.status}`);
    if (response === null) throw Error("null response");
    if (!response.data) throw Error("null response");
    return response;
  };

  
export const tasksLocationService = {
    getTasks
}