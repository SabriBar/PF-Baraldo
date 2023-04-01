import * as fromAlumnoState from './alumno-state.reducer';
import { selectAlumnoState } from './alumno-state.selectors';

describe('AlumnoState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAlumnoState({
      [fromAlumnoState.alumnoStateFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
