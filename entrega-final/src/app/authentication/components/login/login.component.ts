import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/models/usuario';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin!: UntypedFormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let controles: any = {
      usuario: new UntypedFormControl('',Validators.required),
      contraseña: new UntypedFormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
      esAdmin: new UntypedFormControl()
    };

    this.formularioLogin = new UntypedFormGroup(controles);
  }

  login(){
    let usuario: Usuario = {
      usuario: this.formularioLogin.value.usuario,
      contraseña: this.formularioLogin.value.contraseña,
      esAdmin: this.formularioLogin.value.esAdmin
    }
    this.loginService.login(usuario);
    this.router.navigate(['/alumnos/lista']);
   }

}
