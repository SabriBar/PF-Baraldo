import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscripcionState from './inscripcion-state.reducer';

export const selectInscripcionState = createFeatureSelector<fromInscripcionState.InscripcionState>(
  fromInscripcionState.inscripcionStateFeatureKey
);

export const selectCargandoInscripciones = createSelector(
  selectInscripcionState,
  (state: fromInscripcionState.InscripcionState) => state.cargando
);

export const selectInscripcionesCargadas = createSelector(
  selectInscripcionState,
  (state: fromInscripcionState.InscripcionState) => state.inscripciones
);
