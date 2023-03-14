import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SesionGuard } from './sesion.guard';

describe('SesionGuard', () => {
  let guard: SesionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    guard = TestBed.inject(SesionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
