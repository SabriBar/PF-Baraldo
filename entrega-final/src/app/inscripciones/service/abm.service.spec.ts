import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { AbmService } from './abm.service';

describe('AbmService', () => {
  let service: AbmService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AbmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
