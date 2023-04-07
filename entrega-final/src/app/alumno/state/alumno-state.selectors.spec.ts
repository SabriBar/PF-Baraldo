import * as fromAlumnoState from './alumno-state.reducer';
import { selectAlumnoState } from './alumno-state.selectors';

describe('AlumnoState Selectors', () => {
  it('should select the feature state', () => {
    const initialState: fromAlumnoState.AlumnoState = {
      alumnos: [],
      cargando: false
    };
    const result = selectAlumnoState({
      [fromAlumnoState.alumnoStateFeatureKey]: initialState
    });
    expect(result).toEqual(initialState);
  });
});
