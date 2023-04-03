import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/authentication/state/auth.reducer';
import { selectSesionActiva, selectUsuarioActivo } from 'src/app/authentication/state/auth.selectors';
import { Usuario } from 'src/app/shared/models/usuario';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sesionActiva$!: Observable<Boolean>;
  usuarioActivo$!: Observable<Usuario | undefined>;
  public isActive = false;


  public checkActive() {
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
