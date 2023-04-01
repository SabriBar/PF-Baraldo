import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionInicioComponent } from './inscripcion-inicio.component';

describe('InscripcionInicioComponent', () => {
  let component: InscripcionInicioComponent;
  let fixture: ComponentFixture<InscripcionInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
