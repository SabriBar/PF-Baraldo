import { createAction, props } from '@ngrx/store';
import { Inscripcion } from '../shared/models/inscripcion';

export const cargarInscripcionState = createAction(
  '[InscripcionState] Cargar InscripcionState'
);

export const inscripcionesCargadas = createAction(
  '[InscripcionState] Inscripciones cargadas',
  props<{ inscripciones: Inscripcion[] }>()
);




