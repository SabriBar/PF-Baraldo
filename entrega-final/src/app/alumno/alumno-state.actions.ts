import { createAction, props } from '@ngrx/store';
import { Alumno } from '../shared/models/alumno';

export const cargarAlumnoState = createAction(
  '[AlumnoState] Cargar AlumnoState'
);

export const alumnosCargados = createAction(
  '[AlumnoState] Alumnos cargados',
  props<{ alumnos: Alumno[] }>()
);



