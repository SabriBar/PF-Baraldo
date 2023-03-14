import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Curso } from 'src/app/shared/models/curso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AbmService {

  constructor(
    private http: HttpClient
  ) { }

  createCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(`${environment.apiURL}/cursos`, curso).pipe(
      catchError(this.capturarError));
  }

  editCurso(curso: Curso, id: number): Observable<Curso>{
    return this.http.put<Curso>(`${environment.apiURL}/cursos/${id}`, curso).pipe(
      catchError(this.capturarError)
    );
  }

  deleteCurso(curso: Curso): Observable<Curso> {
    return this.http.delete<Curso>(`${environment.apiURL}/cursos/${curso.id}`).pipe(
      catchError(this.capturarError));
  }

  public capturarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      alert(`Hubo un error del lado del cliente: ${error.message}`);
    }else{
      alert(`Hubo un error del lado del servidor: ${error.message}`);
    }

    return throwError(() => new Error('Error en el procesamiento de cursos'));
  }

}

