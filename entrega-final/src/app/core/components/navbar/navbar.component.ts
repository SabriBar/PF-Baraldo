import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/shared/models/sesion';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sesion$!: Observable<Sesion>;
  public isActive = false;


  public checkActive(){
      this.isActive = !this.isActive;
  }

  constructor(
    private sesion: SesionService
  ) { }

  ngOnInit(): void {
    this.sesion$ = this.sesion.obtenerSesion();
  }

}
