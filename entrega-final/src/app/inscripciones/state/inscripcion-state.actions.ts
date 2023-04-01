import { createAction, props } from '@ngrx/store';
import { Inscripcion } from '../../shared/models/inscripcion';

export const cargarInscripcionState = createAction(
  '[InscripcionState] Cargar InscripcionState'
);

export const inscripcionesCargadas = createAction(
  '[InscripcionState] Inscripciones cargadas',
  props<{ inscripciones: Inscripcion[] }>()
);

export const createInscripcionState = createAction(
  '[InscripcionState] Create Inscripcion',
  props<{ inscripcion: Inscripcion }>()
);

export const editInscripcionState = createAction(
  '[InscripcionState] Edit Inscripcion',
  props<{ inscripcion: Inscripcion }>()
);

export const deleteInscripcionState = createAction(
  '[InscripcionState] Delete Inscripcion',
  props<{ inscripcion: Inscripcion }>()
);




