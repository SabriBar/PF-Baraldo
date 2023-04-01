import { createAction, props } from '@ngrx/store';
import { Alumno } from '../../shared/models/alumno';

export const cargarAlumnoState = createAction(
  '[AlumnoState] Cargar AlumnoState'
);

export const alumnosCargados = createAction(
  '[AlumnoState] Alumnos cargados',
  props<{ alumnos: Alumno[] }>()
);

export const createAlumnoState = createAction(
  '[AlumnoState] Create Alumno',
  props<{ alumno: Alumno }>()
);

export const editAlumnoState = createAction(
  '[AlumnoState] Edit Alumno',
  props<{ alumno: Alumno }>()
);

export const deleteAlumnoState = createAction(
  '[AlumnoState] Delete Alumno',
  props<{ alumno: Alumno }>()
);



