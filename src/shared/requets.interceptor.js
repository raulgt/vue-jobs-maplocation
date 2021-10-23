import * as axios from 'axios';
import { loginService } from "../shared/login.service";
import { methodsWithBearer } from '../configurations/constants';

 const token = loginService.getToken();

 const globalInterceptor = axios.interceptors.request.use(function (config) {
    // Do something before request is sent  
    if(includeBearerAuthetication(config)) {
        config.headers.Authorization = `Bearer ${token}`;
    }    
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  const includeBearerAuthetication = (config) => {    
     if (methodsWithBearer.includes(config.url.split('api/')[1])) {
         return true;
     }
     return false;
  }

  export const requestInterceptor = {
    globalInterceptor
  }