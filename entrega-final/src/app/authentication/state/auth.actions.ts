import { createAction, props } from '@ngrx/store';
import { Sesion } from '../../shared/models/sesion';

export const cargarSesion = createAction(
  '[Auth] Sesion cargada',
  props<{ sesion: Sesion }>()
);




