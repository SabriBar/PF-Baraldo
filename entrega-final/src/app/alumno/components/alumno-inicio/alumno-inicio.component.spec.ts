import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoInicioComponent } from './alumno-inicio.component';

describe('AlumnoInicioComponent', () => {
  let component: AlumnoInicioComponent;
  let fixture: ComponentFixture<AlumnoInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
