import { createReducer, on } from '@ngrx/store';
import { Inscripcion } from '../../shared/models/inscripcion';
import * as InscripcionStateActions from './inscripcion-state.actions';

export const inscripcionStateFeatureKey = 'inscripcionState';

export interface InscripcionState {
  cargando: boolean;
  inscripciones: Inscripcion[];
}

export const initialState: InscripcionState = {
  cargando: false,
  inscripciones: []
};

export const reducer = createReducer(
  initialState,
  on(InscripcionStateActions.cargarInscripcionState, (state) => {
    return {...state, cargando: true};
  }),
  on(InscripcionStateActions.inscripcionesCargadas, (state, { inscripciones }) => {
    return {...state, cargando: false, inscripciones};
  }),
  on(InscripcionStateActions.createInscripcionState, (state, { inscripcion: Inscripcion }) => {
    return state;
  }),
  on(InscripcionStateActions.editInscripcionState, (state, { inscripcion: Inscripcion }) => {
    return state;
  }),
  on(InscripcionStateActions.deleteInscripcionState, (state, { inscripcion: Inscripcion }) => {
    return state;
  })
  
  )
