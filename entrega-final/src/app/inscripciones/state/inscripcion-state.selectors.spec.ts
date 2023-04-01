import * as fromInscripcionState from './inscripcion-state.reducer';
import { selectInscripcionState } from './inscripcion-state.selectors';

describe('InscripcionState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectInscripcionState({
      [fromInscripcionState.inscripcionStateFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
