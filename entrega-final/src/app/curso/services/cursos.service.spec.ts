import { TestBed } from '@angular/core/testing';
import { CursosService } from './cursos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AbmService } from './abm.service';
import { Curso } from 'src/app/shared/models/curso';
import { of } from 'rxjs';

describe('CursosService', () => {
  let service: CursosService;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });

  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  service = new CursosService(httpClientSpy as any, AbmService as any);

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("Servicio retorna arreglo de datos mockeados", (done: DoneFn) => {
    const mockDatos: Curso[] = [
      {
        "nombre": "Angular",
        "comision": 100,
        "profesor": {
          "id": 3,
          "nombre": "Garrison",
          "correo": "mrGarrison@gmail.com"
        },
        "inscripcionAbierta": "Abierta",
        "id": 1
      },
      {
        "nombre": "Javascript",
        "comision": 101,
        "profesor": {
          "id": 3,
          "nombre": "Garrison",
          "correo": "mrGarrison@gmail.com"
        },
        "inscripcionAbierta": "Cerrada",
        "id": 2
      },
      {
        "nombre": "Phyton",
        "comision": 103,
        "profesor": {
          "id": 4,
          "nombre": "Walter",
          "correo": "walterwh@gmail.com"
        },
        "inscripcionAbierta": "Abierta",
        "id": 3
      },
      {
        "nombre": "Diseño UX",
        "comision": 105,
        "profesor": {
          "id": 5,
          "nombre": "Albus",
          "correo": "albus@gmail.com"
        },
        "inscripcionAbierta": "Cerrada",
        "id": 4
      },
      {
        "nombre": "SQL",
        "comision": 108,
        "profesor": {
          "id": 6,
          "nombre": "Indiana",
          "correo": "indianaj@gmail.com"
        },
        "inscripcionAbierta": "Cerrada",
        "id": 5
      }
    ];
    httpClientSpy.get.and.returnValue(of(mockDatos));

    service.obtenerCursosObservable().subscribe((cursos: Curso[]) => {
      expect(cursos).toEqual(mockDatos);
      done();
    });
  });

})