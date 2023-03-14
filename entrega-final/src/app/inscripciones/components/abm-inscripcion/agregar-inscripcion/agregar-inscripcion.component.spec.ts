import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UntypedFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material.module';
import { AgregarInscripcionComponent } from './agregar-inscripcion.component';

describe('AgregarInscripcionComponent', () => {
  let component: AgregarInscripcionComponent;
  let fixture: ComponentFixture<AgregarInscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarInscripcionComponent],
      imports: [
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule],
      providers: [
        UntypedFormBuilder
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Validaciones correctas en todos los campos', () => {
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
      nombre: 'Jirafales',
      correo: 'jirafales@gmail.com'
    });


  expect(form.valid).toBeTrue();
})
});
