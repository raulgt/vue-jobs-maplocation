import { loginService } from '../shared/login.service';

const guardMainRoute = (to, from, next) => {       
    if (to.name !== 'login' && !loginService.isTokenValid()){      
        next({ name: 'login' })
    }else if (to.name === 'login' && loginService.isTokenValid()){
        next({ name: 'home' })
    }
    else {      
        next();
    }
  }


export const navigationGuard = {
    guardMainRoute
}