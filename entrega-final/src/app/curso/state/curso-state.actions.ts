import { createAction, props } from '@ngrx/store';
import { Curso } from '../../shared/models/curso';

export const cargarCursoState = createAction(
  '[CursoState] Cargar CursoState'
);

export const cursosCargados = createAction(
  '[CursoState] Cursos cargados',
  props<{ cursos: Curso[] }>()
);

export const createCursoState = createAction(
  '[CursoState] Create Curso',
  props<{ curso: Curso }>()
);

export const editCursoState = createAction(
  '[CursoState] Edit Curso',
  props<{ curso: Curso }>()
);

export const deleteCursoState = createAction(
  '[CursoState] Delete Curso',
  props<{ curso: Curso }>()
);





