import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Alumno } from 'src/app/shared/models/alumno';
import { AbmService } from './abm.service';

import { AlumnosService } from './alumnos.service';

describe('AlumnosService', () => {
  let service: AlumnosService;
  let httpClientSpy: {get: jasmine.Spy}

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });

  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  service = new AlumnosService(httpClientSpy as any, AbmService as any);

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("Servicio retorna arreglo de datos mockeados", (done: DoneFn)=>{
    const mockDatos: Alumno[] =  [
      {
        "nombre": "Juan",
        "apellido": "Rodriguez",
        "curso": {
          "nombre": "SQL",
          "comision": 108,
          "profesor": {
            "id": 6,
            "nombre": "Indiana",
            "correo": "indianaj@gmail.com"
          },
          "inscripcionAbierta": "Cerrada",
          "id": 5
        },
        "comision": 100,
        "email": "juanrodri@gmail.com",
        "id": 1
      },
      {
        "nombre": "Mario",
        "apellido": "Garcia",
        "curso": {
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
        "comision": 101,
        "email": "garcia_mario@gmail.com",
        "id": 2
      },
      {
        "nombre": "Ana",
        "apellido": "Lopez",
        "curso": {
          "nombre": "SQL",
          "comision": 108,
          "profesor": {
            "id": 6,
            "nombre": "Indiana",
            "correo": "indianaj@gmail.com"
          },
          "inscripcionAbierta": "Cerrada",
          "id": 5
        },
        "comision": 103,
        "email": "ana1lopez@gmail.com",
        "id": 3
      },
      {
        "nombre": "Carlos",
        "apellido": "Martinez",
        "curso": {
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
        "comision": 105,
        "email": "carlistosm@gmail.com",
        "id": 4
      },
      {
        "nombre": "Jose",
        "apellido": "Hernandez",
        "curso": {
          "nombre": "Angular",
          "comision": 100,
          "profesor": {
            "id": 2,
            "nombre": "Minerva",
            "correo": "minerva@gmail.com"
          },
          "inscripcionAbierta": "Abierta",
          "id": 1
        },
        "comision": 100,
        "email": "josehernandez@gmail.com",
        "id": 5
      },
      {
        "nombre": "Laura",
        "apellido": "Perez",
        "curso": {
          "nombre": "SQL",
          "comision": 108,
          "profesor": {
            "id": 6,
            "nombre": "Indiana",
            "correo": "indianaj@gmail.com"
          },
          "inscripcionAbierta": "Cerrada",
          "id": 5
        },
        "comision": 108,
        "email": "lauperez@gmail.com",
        "id": 6
      },
      {
        "nombre": "Pedro",
        "apellido": "Sanchez",
        "curso": {
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
        "comision": 101,
        "email": "pepesanchez@gmail.com",
        "id": 7
      }
    ];

    httpClientSpy.get.and.returnValue(of(mockDatos));

    service.getAlumnosObservable().subscribe((alumnos: Alumno[]) => {
      expect(alumnos).toEqual(mockDatos);
      done(); 
    });
  })
});
