import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Inscripcion } from 'src/app/shared/models/inscripcion';
import { environment } from 'src/environments/environment';
import { AbmService } from './abm.service';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  constructor(
    private http: HttpClient,
    private abmService: AbmService
  ) {}

  getInscripcionesObservable(): Observable<Inscripcion[]> {
    return this.http.get<Inscripcion[]>(`${environment.apiURL}/inscripciones`,{
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
     })
     }).pipe(
      catchError(this.abmService.capturarError));
  }
  
}
