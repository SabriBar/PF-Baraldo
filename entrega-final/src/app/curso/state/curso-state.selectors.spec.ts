import * as fromCursoState from './curso-state.reducer';
import { selectCursoState } from './curso-state.selectors';

describe('CursoState Selectors', () => {
  it('should select the feature state', () => {
    const initialState: fromCursoState.CursoState = {
      cursos: [],
      cargando: false
    };
    const result = selectCursoState({
      [fromCursoState.cursoStateFeatureKey]: initialState
    });
    expect(result).toEqual(initialState);
  });
});
