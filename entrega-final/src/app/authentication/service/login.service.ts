import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Sesion } from 'src/app/shared/models/sesion';
import { Usuario } from 'src/app/shared/models/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private sesion: SesionService,
    private http: HttpClient
  ) { }

  login(usuario: Usuario): Observable<Sesion>{
    return this.http.get<Usuario[]>(`${environment.apiURL}/usuarios`).pipe(
      map((usuarios: Usuario[]) => {
        let usuarioValidado = usuarios.find((u: Usuario) => u.usuario === usuario.usuario && u.contraseña === usuario.contraseña);

        if(usuarioValidado){
          const sesion: Sesion = {
            sesionActiva: true,
            usuarioActivo: usuarioValidado
          }
          return sesion
        }else {
          const sesion: Sesion = {
            sesionActiva: false
          }
          return sesion

        }
      })
    );
  }
} 
