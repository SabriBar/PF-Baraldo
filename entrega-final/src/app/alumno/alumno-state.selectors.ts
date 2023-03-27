import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAlumnoState from './alumno-state.reducer';

export const selectAlumnoState = createFeatureSelector<fromAlumnoState.AlumnoState>(
  fromAlumnoState.alumnoStateFeatureKey
);

export const selectCargandoAlumnos = createSelector(
  selectAlumnoState,
  (state: fromAlumnoState.AlumnoState) => state.cargando
);

export const selectAlumnosCargados = createSelector(
  selectAlumnoState,
  (state: fromAlumnoState.AlumnoState) => state.alumnos
);

