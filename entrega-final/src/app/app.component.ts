import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from './authentication/state/auth.reducer';
import { selectSesionActiva, selectUsuarioActivo } from './authentication/state/auth.selectors';
import { SesionService } from './core/services/sesion.service';
import { Sesion } from './shared/models/sesion';
import { Usuario } from './shared/models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'entrega-final';

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


