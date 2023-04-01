import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AuthState } from 'src/app/authentication/state/auth.reducer';
import { selectSesionState } from 'src/app/authentication/state/auth.selectors';
import { Sesion } from 'src/app/shared/models/sesion';

@Injectable({
  providedIn: 'root'
})
export class SesionGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private authStore: Store<AuthState>,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authStore.select(selectSesionState).pipe(
      map((sesion: Sesion) =>{
        if(sesion.sesionActiva){
          return true;
        }else{
          this.router.navigate(['/login'])
          return false
        }
      })
    );
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authStore.select(selectSesionState).pipe(
        map((sesion: Sesion) =>{
          if(sesion.sesionActiva){
            return true;
          }else{
            this.router.navigate(['/login'])
            return false
          }
        })
      );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authStore.select(selectSesionState).pipe(
        map((sesion: Sesion) =>{
          if(sesion.sesionActiva){
            return true;
          }else{
            this.router.navigate(['/login'])
            return false
          }
        })
      );
  }
}
