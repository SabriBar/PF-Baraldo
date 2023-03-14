import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UntypedFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material.module';
import { AgregarAlumnoComponent } from './agregar-alumno.component';

describe('AgregarAlumnoComponent', () => {
  let component: AgregarAlumnoComponent;
  let fixture: ComponentFixture<AgregarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarAlumnoComponent],
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
    fixture = TestBed.createComponent(AgregarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Validaciones correctas en todos los campos', () =>{
    const form = component.form;
    const nombre = form.controls["nombre"];
    const apellido = form.controls["apellido"];
    const curso = form.controls["curso"];
    const comision = form.controls["comision"];
    const email = form.controls["email"];

    nombre.setValue('Cosme');
    apellido.setValue('Fulanito');
    curso.setValue('Angular');
    comision.setValue('100');
    email.setValue('cosmefula@gmail.com');

    expect(form.valid).toBeTrue();
  })
});
