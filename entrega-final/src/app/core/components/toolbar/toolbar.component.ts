import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/authentication/auth.reducer';
import { selectSesionActiva, selectUsuarioActivo } from 'src/app/authentication/auth.selectors';
import { Sesion } from 'src/app/shared/models/sesion';
import { Usuario } from 'src/app/shared/models/usuario';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  sesionActiva$!: Observable<Boolean>;
  usuarioActivo$!: Observable<Usuario | undefined>;

  constructor(
    private sesion: SesionService,
    private router: Router,
    private authStore: Store<AuthState>
  ) { }

  ngOnInit(): void {
    this.sesionActiva$ = this.authStore.select(selectSesionActiva);
    this.usuarioActivo$ = this.authStore.select(selectUsuarioActivo);
  }

  logout(){
    let sesionLogout: Sesion = {
      sesionActiva: false,
      usuarioActivo: undefined
    }
    this.sesion.logout(sesionLogout);
    this.router.navigate(['/login']);
  }

}
