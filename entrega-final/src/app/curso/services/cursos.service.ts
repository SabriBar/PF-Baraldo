import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable } from 'rxjs';
import { Curso } from 'src/app/shared/models/curso';
import { environment } from 'src/environments/environment';
import { AbmService } from './abm.service';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(
    private http: HttpClient,
    private abmService: AbmService
  ) {}

  obtenerCursosObservable(): Observable<Curso[]>{
   return this.http.get<Curso[]>(`${environment.apiURL}/cursos`,{
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'encoding': 'UTF-8'
   })
   }).pipe(
    catchError(this.abmService.capturarError));
  }

}
