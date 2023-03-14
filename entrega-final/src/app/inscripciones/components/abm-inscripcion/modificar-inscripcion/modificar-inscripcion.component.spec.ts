import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';

import { ModificarInscripcionComponent } from './modificar-inscripcion.component';

describe('ModificarInscripcionComponent', () => {
  let component: ModificarInscripcionComponent;
  let fixture: ComponentFixture<ModificarInscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarInscripcionComponent ],
      imports: [HttpClientTestingModule, MaterialModule, BrowserAnimationsModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('Validaciones correctas en todos los campos', () =>{
    const form = component.form;
    const curso = form.controls["curso"];
    const comision = form.controls["comision"];
    const alumnoNombre = form.controls["alumnoNombre"];
    const alumnoApellido = form.controls["alumnoApellido"];
    const profesor = form.controls["profesor"];

    curso.setValue('Angular');
    comision.setValue('100');
    alumnoNombre.setValue('Cosme');
    alumnoApellido.setValue('Fulanito');
    profesor.setValue({
      nombre:'Jirafales',
      correo: 'jirafales@gmail.com'
    });

    expect(form.valid).toBeTrue();
  })
});
