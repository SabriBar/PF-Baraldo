import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable} from 'rxjs';
import { Alumno } from 'src/app/shared/models/alumno';
import { environment } from 'src/environments/environment';
import { AbmService } from './abm.service';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(
    private http: HttpClient,
    private abmService: AbmService
  ) {}

  getAlumnosObservable(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(`${environment.apiURL}/alumnos`,{
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
     })
     }).pipe(
      catchError(this.abmService.capturarError));
  }

}
