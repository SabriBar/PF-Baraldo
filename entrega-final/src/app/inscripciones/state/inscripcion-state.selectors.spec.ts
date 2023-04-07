import * as fromInscripcionState from './inscripcion-state.reducer';
import { selectInscripcionState } from './inscripcion-state.selectors';

describe('InscripcionState Selectors', () => {
  it('should select the feature state', () => {
    const initialState: fromInscripcionState.InscripcionState = {
      inscripciones: [],
      cargando: false
    };
    const result = selectInscripcionState({
      [fromInscripcionState.inscripcionStateFeatureKey]: initialState
    });
    expect(result).toEqual(initialState);
  });
});
