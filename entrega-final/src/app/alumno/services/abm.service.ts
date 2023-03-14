import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Alumno } from 'src/app/shared/models/alumno';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AbmService {

  constructor(
    private http: HttpClient
  ) { }

  createAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(`${environment.apiURL}/alumnos`, alumno).pipe(
      catchError(this.capturarError));
  }

  editAlumno(alumno: Alumno, id: number): Observable<Alumno>{
    return this.http.put<Alumno>(`${environment.apiURL}/alumnos/${id}`, alumno).pipe(
      catchError(this.capturarError)
    );
  }

  deleteAlumno(id: number): Observable<Alumno> {
    return this.http.delete<Alumno>(`${environment.apiURL}/alumnos/${id}`).pipe(
      catchError(this.capturarError));
  }

  public capturarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      alert(`Hubo un error del lado del cliente: ${error.message}`);
    }else{
      alert(`Hubo un error del lado del servidor: ${error.message}`);
    }

    return throwError(() => new Error('Error en el procesamiento de alumnos'));
  }

}
