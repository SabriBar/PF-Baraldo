import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/authentication/auth.reducer';
import { selectSesionActiva, selectUsuarioActivo } from 'src/app/authentication/auth.selectors';
import { Sesion } from 'src/app/shared/models/sesion';
import { Usuario } from 'src/app/shared/models/usuario';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sesionActiva$!: Observable<Boolean>;
  usuarioActivo$!: Observable<Usuario | undefined>;
  public isActive = false;


  public checkActive(){
      this.isActive = !this.isActive;
  }

  constructor(
    private authStore: Store<AuthState>
  ) { }

  ngOnInit(): void {
    this.sesionActiva$ = this.authStore.select(selectSesionActiva);
    this.usuarioActivo$ = this.authStore.select(selectUsuarioActivo);
  }

}
