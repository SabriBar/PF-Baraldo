import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoInicioComponent } from './curso-inicio.component';

describe('CursoInicioComponent', () => {
  let component: CursoInicioComponent;
  let fixture: ComponentFixture<CursoInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
