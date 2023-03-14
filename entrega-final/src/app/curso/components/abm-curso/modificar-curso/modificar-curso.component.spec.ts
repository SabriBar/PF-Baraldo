import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';

import { ModificarCursoComponent } from './modificar-curso.component';

describe('ModificarCursoComponent', () => {
  let component: ModificarCursoComponent;
  let fixture: ComponentFixture<ModificarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarCursoComponent ],
      imports: [HttpClientTestingModule, MaterialModule, BrowserAnimationsModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Validaciones correctas en todos los campos', () =>{
    const form = component.form;
    const nombre = form.controls["nombre"];
    const comision = form.controls["comision"];
    const profesor = form.controls["profesor"];
    const inscripcionAbierta = form.controls["inscripcionAbierta"];

    nombre.setValue('Angular');
    comision.setValue('100');
    profesor.setValue({
      nombre:'Jirafales',
      correo: 'jirafales@gmail.com'
    });
    inscripcionAbierta.setValue('Abierta');

    expect(form.valid).toBeTrue();
  })
});
