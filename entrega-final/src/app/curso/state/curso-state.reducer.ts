import { createReducer, on } from '@ngrx/store';
import { Curso } from '../../shared/models/curso';
import * as CursoStateActions from './curso-state.actions';

export const cursoStateFeatureKey = 'cursoState';

export interface CursoState {
  cursos: Curso[];
  cargando: boolean;
}

export const initialState: CursoState = {
  cursos: [],
  cargando: false

};

export const reducer = createReducer(
  initialState,
  on(CursoStateActions.cargarCursoState, (state) => {
    return { ...state, cargando: true };
  }),
  on(CursoStateActions.cursosCargados, (state, { cursos }) => {
    return { ...state, cargando: false, cursos };
  }),
  on(CursoStateActions.createCursoState, (state, { curso: Curso }) => {
    return state;
  }),
  on(CursoStateActions.editCursoState, (state, { curso: Curso }) => {
    return state;
  }),
  on(CursoStateActions.deleteCursoState, (state, { curso: Curso }) => {
    return state;
  })
);

