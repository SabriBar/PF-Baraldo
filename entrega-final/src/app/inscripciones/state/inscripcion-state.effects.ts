import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs";
import { Inscripcion } from "src/app/shared/models/inscripcion";
import { AbmService } from "../service/abm.service";
import { InscripcionService } from "../service/inscripcion.service";
import { cargarInscripcionState, createInscripcionState, deleteInscripcionState, editInscripcionState, inscripcionesCargadas } from "./inscripcion-state.actions";


@Injectable()
export class InscripcionEffects{
    cargarinscripciones$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(cargarInscripcionState),
            concatMap(() => {
                return this.inscripciones.getInscripcionesObservable().pipe(
                    map((i: Inscripcion[]) => inscripcionesCargadas({ inscripciones: i }))
                )
            })
        )
    });
    
        createInscripcion$ = createEffect(() => {
            return this.actions$.pipe(
                ofType(createInscripcionState),
                concatMap(({ inscripcion }) => {
                    return this.inscripcionAbm.createInscripcion(inscripcion).pipe(
                        map((inscripcion: Inscripcion) => {
                            this.router.navigate(['/inscripciones/lista']);
                        this.snackBar.open('  Inscripcion agregada correctamente', '', {
                            duration: 1500,
                            horizontalPosition: 'left',
                            verticalPosition: 'bottom'
                          });
                            return cargarInscripcionState();
                            
                        })
                    )
                })
            );
        });

        deleteInscripcion$ = createEffect(() => {
            return this.actions$.pipe(
                ofType(deleteInscripcionState),
                concatMap(({ inscripcion }) => {
                    return this.inscripcionAbm.deleteInscripcion(inscripcion).pipe(
                        map((inscripcion: Inscripcion) => {
                            this.snackBar.open('  Inscripcion eliminada correctamente', '', {
                                duration: 1500,
                                horizontalPosition: 'left',
                                verticalPosition: 'bottom'
                              });
                            return cargarInscripcionState();
                        })
                    )
                })
            )
        });

        editarInscripcion$ = createEffect(() => {
            return this.actions$.pipe(
                ofType(editInscripcionState),
                concatMap(({ inscripcion }) =>{
                    return this.inscripcionAbm.editInscripcion(inscripcion, inscripcion.id).pipe(
                        map((inscripcion: Inscripcion) => {
                            this.snackBar.open('  Inscripcion editada correctamente', '', {
                                duration: 1500,
                                horizontalPosition: 'left',
                                verticalPosition: 'bottom'
                              });
                            return cargarInscripcionState();
                        })
                    )
                })
            )
        });

    constructor(
        private inscripciones: InscripcionService,
        private inscripcionAbm: AbmService,
        private actions$: Actions,
        private router: Router,
        private snackBar: MatSnackBar
    ){}
}