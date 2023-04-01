import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs";
import { Alumno } from "src/app/shared/models/alumno";
import { AbmService } from "../services/abm.service";
import { AlumnosService } from "../services/alumnos.service";
import { alumnosCargados, cargarAlumnoState, createAlumnoState, deleteAlumnoState, editAlumnoState } from "./alumno-state.actions";


@Injectable()
export class AlumnoEffects {
    cargarAlumnos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(cargarAlumnoState),
            concatMap(() => {
                return this.alumnos.getAlumnosObservable().pipe(
                    map((a: Alumno[]) => alumnosCargados({ alumnos: a }))
                )
            })
        )
    });

    createAlumno$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(createAlumnoState),
            concatMap(({ alumno }) => {
                return this.alumnosAbm.createAlumno(alumno).pipe(
                    map((alumno: Alumno) => {
                        this.router.navigate(['/alumnos/lista']);
                        this.snackBar.open('  Alumno agregado correctamente', '', {
                            duration: 1500,
                            horizontalPosition: 'left',
                            verticalPosition: 'bottom'
                        });
                        return cargarAlumnoState();

                    })
                )
            })
        );
    });


    deleteAlumno$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteAlumnoState),
            concatMap(({ alumno }) => {
                return this.alumnosAbm.deleteAlumno(alumno).pipe(
                    map((alumno: Alumno) => {
                        this.snackBar.open('  Alumno eliminado correctamente', '', {
                            duration: 1500,
                            horizontalPosition: 'left',
                            verticalPosition: 'bottom'
                        });
                        return cargarAlumnoState();
                    })
                )
            })
        )
    });


        editarAlumno$ = createEffect(() => {
            return this.actions$.pipe(
                ofType(editAlumnoState),
                concatMap(({ alumno }) =>{
                    return this.alumnosAbm.editAlumno(alumno, alumno.id).pipe(
                        map((alumno: Alumno) => {
                            this.snackBar.open('  Alumno editado correctamente', '', {
                                duration: 1500,
                                horizontalPosition: 'left',
                                verticalPosition: 'bottom'
                              });
                            return cargarAlumnoState();
                        })
                    )
                })
            )
        });

    constructor(
        private alumnos: AlumnosService,
        private alumnosAbm: AbmService,
        private actions$: Actions,
        private router: Router,
        private snackBar: MatSnackBar
    ) { }
}