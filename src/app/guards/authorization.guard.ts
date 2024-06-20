import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,
   GuardResult,
    MaybeAsync,
     Router,
     RouterStateSnapshot
    } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthorizationGuard  {

  constructor(private authService : AuthenticationService,
              private router : Router){

  }

 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
   let authorize : boolean = false;
   let authorizedRoles : string[] = route.data['roles'];
   let roles : string[] = this.authService.roles as string[];
   for (const element of roles){
    if(authorizedRoles.includes(element)){
      this.authService.authorized = true;
      authorize = true;
    }
   }
   return authorize;
  }
}

