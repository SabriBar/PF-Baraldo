import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, of, subscribeOn, Subscription } from 'rxjs';
import { Sesion } from 'src/app/shared/models/sesion';
import { Usuario } from 'src/app/shared/models/usuario';
import { cargarSesion } from '../../state/auth.actions';
import { AuthState } from '../../state/auth.reducer';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  formularioLogin!: FormGroup;
  suscripcion!: Subscription;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private authStore: Store<AuthState>
  ) {}

  ngOnInit(): void {
    let controles: any = {
      usuario: new FormControl('',Validators.required),
      contraseña: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
      esAdmin: new FormControl()
    };

    this.formularioLogin = new FormGroup(controles);
  }

  ngOnDestroy(): void {
    if(this.suscripcion) {
    this.suscripcion.unsubscribe();
  }
}

  login(){
    let usuario: Usuario = {
      usuario: this.formularioLogin.value.usuario,
      contraseña: this.formularioLogin.value.contraseña,
      esAdmin: this.formularioLogin.value.esAdmin
    }
      this.suscripcion = this.loginService.login(usuario).pipe(
        catchError((error) => {
          console.error(error);
          return of();
        })
      ).subscribe((sesion: Sesion) => {
        if(sesion.sesionActiva){
          this.authStore.dispatch(cargarSesion({ sesion: sesion }));
          this.router.navigate(['/alumnos/lista']);
        } 
      });
    
   }

}
