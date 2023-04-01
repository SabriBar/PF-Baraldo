import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs";
import { Curso } from "src/app/shared/models/curso";
import { AbmService } from "../services/abm.service";
import { CursosService } from "../services/cursos.service";
import { cargarCursoState, createCursoState, cursosCargados, deleteCursoState, editCursoState } from "./curso-state.actions";

@Injectable()
export class CursoEffects{
    cargarCursos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(cargarCursoState),
            concatMap(() => {
                return this.cursos.obtenerCursosObservable().pipe(
                    map((c: Curso[]) => cursosCargados({ cursos: c }))
                )
            })
        )
    });

    createCurso$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(createCursoState),
            concatMap(({ curso }) => {
                return this.cursosAbm.createCurso(curso).pipe(
                    map((curso: Curso) => {
                        this.router.navigate(['/cursos/lista']);
                        this.snackBar.open('  Curso agregado correctamente', '', {
                            duration: 1500,
                            horizontalPosition: 'left',
                            verticalPosition: 'bottom'
                          });
                        return cargarCursoState();
                        
                    })
                )
            })
        );
    });

    deleteCurso$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteCursoState),
            concatMap(({ curso }) => {
                return this.cursosAbm.deleteCurso(curso).pipe(
                    map((curso: Curso) => {
                        this.snackBar.open('  Curso eliminado correctamente', '', {
                            duration: 1500,
                            horizontalPosition: 'left',
                            verticalPosition: 'bottom'
                          });
                        return cargarCursoState();
                    })
                )
            })
        )
    });


        editCurso$ = createEffect(() => {
            return this.actions$.pipe(
                ofType(editCursoState),
                concatMap(({ curso }) =>{
                    return this.cursosAbm.editCurso(curso, curso.id).pipe(
                        map((curso: Curso) => {
                            this.snackBar.open('  Curso editado correctamente', '', {
                                duration: 1500,
                                horizontalPosition: 'left',
                                verticalPosition: 'bottom'
                              });
                            return cargarCursoState();
                        })
                    )
                })
            )
        });

    constructor(
        private cursos: CursosService,
        private cursosAbm: AbmService,
        private actions$: Actions,
        private router: Router,
        private snackBar: MatSnackBar

    ){}
}


