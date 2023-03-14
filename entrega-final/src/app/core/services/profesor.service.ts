import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profesor } from 'src/app/shared/models/profesor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerProfesores(): Observable<Profesor[]>{
    return this.http.get<Profesor[]>(`${environment.apiURL}/profesores`);
  }
}
