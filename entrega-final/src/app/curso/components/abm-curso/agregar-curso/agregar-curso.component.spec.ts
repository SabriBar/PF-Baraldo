import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UntypedFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material.module';

import { AgregarCursoComponent } from './agregar-curso.component';

describe('AgregarCursoComponent', () => {
  let component: AgregarCursoComponent;
  let fixture: ComponentFixture<AgregarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarCursoComponent],
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
    fixture = TestBed.createComponent(AgregarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Validaciones correctas en todos los campos', () => {
    const form = component.form;
    const nombre = form.controls["nombre"];
    const comision = form.controls["comision"];
    const profesor = form.controls["profesor"];
    const inscripcionAbierta = form.controls["inscripcionAbierta"];

    nombre.setValue('Angular');
    comision.setValue('100');
    profesor.setValue({
      nombre: 'Jirafales',
      correo: 'jirafales@gmail.com'
    });
    inscripcionAbierta.setValue(true);

    expect(form.valid).toBeTrue();
  })


  it('Informacion guardada correctamente', () => {

    const form = component.form;
    const nombre = form.controls["nombre"];
    const comision = form.controls["comision"];
    const profesor = form.controls["profesor"];
    const inscripcionAbierta = form.controls["inscripcionAbierta"];

    nombre.setValue('Angular');
    comision.setValue('100');
    profesor.setValue({
      nombre: 'Garrison',
      correo: 'mrGarrison@gmail.com'
    });
    inscripcionAbierta.setValue('Abierta');

    const btn = fixture.debugElement.query(By.css('#btn'));
    btn.nativeElement.click();
    fixture.detectChanges();

    const cursos = component.cursos;

    expect(cursos[cursos.length-1]).toEqual({
      nombre: 'Angular',
      comision: 100,
      profesor:{
        id: 1,
        nombre: 'Garrison',
        correo: 'mrGarrison@gmail.com'
      },
      inscripcionAbierta: 'Abierta',
      id: 1
    })

  })

});