import { loginService } from '../shared/login.service';

const guardMainRoute = (to, from, next) => {       
    if (to.name !== 'login' && !loginService.isTokenValid()) {      
        next({ path: '/login' });
    }else if (to.name === 'login' && loginService.isTokenValid()) {       
        next({ path: '/dashboard' });
    }
    else {      
        next();
    }
  }

export const navigationGuard = {
    guardMainRoute
}