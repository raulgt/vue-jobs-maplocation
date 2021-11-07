import * as axios from "axios";
import router from '../router/index';
import { localStorageService } from "./local-storage.service";

import { BASE_API } from "./config";

const loginUser = async function(credetials) {
  try {
    const response = await axios.post(`${BASE_API}/auth/login`, credetials);
    let parseResponse = parseItem(response);
    await saveLoginToken(parseResponse.data.access_token);
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
    await saveLocalStorageUserDetails(parseResponse.data);
    return parseResponse.data;
  } catch (error) {
    return {};
  }
};

const getLocalStorageUserDetail = async function () {
  return localStorageService.getLsItem("userDetails");
}

const logOutUser = () => {
  localStorageService.removeLsItem('token');  
  localStorageService.removeLsItem('userDetails');  
  router.push('/init/login'); 
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

const saveLoginToken = async (token) => { 
  localStorageService.setLsItem("token", token);
};

const saveLocalStorageUserDetails = async (userData) => {
  localStorageService.setLsItem("userDetails", userData);
}

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
  getLocalStorageUserDetail,
  isTokenValid
};
