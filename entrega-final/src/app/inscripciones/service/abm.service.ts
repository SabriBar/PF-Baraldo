import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Inscripcion } from 'src/app/shared/models/inscripcion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AbmService {

  constructor(
    private http: HttpClient
  ) { }

  createInscripcion(inscripcion: Inscripcion): Observable<Inscripcion> {
    return this.http.post<Inscripcion>(`${environment.apiURL}/inscripciones`, inscripcion).pipe(
      catchError(this.capturarError));
  }

  editInscripcion(inscripcion: Inscripcion, id: number): Observable<Inscripcion>{
    return this.http.put<Inscripcion>(`${environment.apiURL}/inscripciones/${id}`, inscripcion).pipe(
      catchError(this.capturarError)
    );
  }

  deleteInscripcion(id: number): Observable<Inscripcion> {
    return this.http.delete<Inscripcion>(`${environment.apiURL}/inscripciones/${id}`).pipe(
      catchError(this.capturarError));
  }

  public capturarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      alert(`Hubo un error del lado del cliente: ${error.message}`);
    }else{
      alert(`Hubo un error del lado del servidor: ${error.message}`);
    }

    return throwError(() => new Error('Error en el procesamiento de inscripciones'));
  }

}
