import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/shared/models/sesion';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  sesion$!: Observable<Sesion>

  constructor(
    private sesion: SesionService,
    private router: Router
  ) { }

  ngOnInit(){
    this.sesion$ = this.sesion.obtenerSesion();
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
