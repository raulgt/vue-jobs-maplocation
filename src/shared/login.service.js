import * as axios from "axios";
import router from '../router/index';
import { localStorageService } from "./local-storage.service";

import { BASE_API } from "./config";

const loginUser = async function(credetials) {
  try {
    const response = await axios.post(`${BASE_API}/auth/login`, credetials);
    let parseResponse = parseItem(response);
    saveLoginToken(parseResponse.data.access_token);
    return parseResponse.data;
  } catch (error) {
    console.error(error);
    return {};
  }
};

const getUserDetail = async function() {
  try {
    const response = await axios.get(`${BASE_API}/auth/me`);
    let parseResponse = parseItem(response);
    return parseResponse.data;
  } catch (error) {
    return {};
  }
};

const logOutUser = () => {
  localStorageService.removeLsItem('token');  
  router.push('/login'); 
}

const isTokenValid = () => {  
  const token = getToken();       
  if (token && !isTokenExpired(token.toString())) {      
   return true;
  }
  return false;
}

const isTokenExpired = (token) => {    
 const expiry = (JSON.parse(Buffer.from(token.split('.')[1], 'base64'))).exp;
 return (Math.floor((new Date).getTime() / 1000)) >= expiry;
}

const saveLoginToken = (token) => {
  localStorageService.setLsItem("token", token);
};

const getToken = () => {
  return localStorageService.getLsItem("token");
};

export const parseItem = (response) => {
  if (response.status !== 200) throw Error(`custom-error: ${response.message}`);
  if (response === null) throw Error("null response");
  if (!response.data) throw Error("null response");
  return response;
};

export const loginService = {
  loginUser,
  logOutUser,
  getToken,
  getUserDetail,
  isTokenValid
};
