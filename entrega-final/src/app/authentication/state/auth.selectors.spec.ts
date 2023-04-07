import * as fromAuth from './auth.reducer';
import { selectAuthState } from './auth.selectors';

describe('AuthState Selectors', () => {
  it('should select the feature state', () => {
    const initialState: fromAuth.AuthState = {
      sesion: {
        sesionActiva: false
      }
    };
    const result = selectAuthState({
      [fromAuth.authFeatureKey]: initialState
    });
    expect(result).toEqual(initialState);
  });
});
