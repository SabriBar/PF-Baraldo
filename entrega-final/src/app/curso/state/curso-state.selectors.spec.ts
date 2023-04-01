import * as fromCursoState from './curso-state.reducer';
import { selectCursoState } from './curso-state.selectors';

describe('CursoState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCursoState({
      [fromCursoState.cursoStateFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
