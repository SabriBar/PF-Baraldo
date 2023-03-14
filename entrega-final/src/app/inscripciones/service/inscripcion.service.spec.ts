import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { InscripcionService } from './inscripcion.service';

describe('InscripcionService', () => {
  let service: InscripcionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(InscripcionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
