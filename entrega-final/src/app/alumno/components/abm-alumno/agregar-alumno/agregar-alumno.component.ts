import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { createAlumnoState } from 'src/app/alumno/state/alumno-state.actions';
import { AlumnoState } from 'src/app/alumno/state/alumno-state.reducer';
import { CursosService } from 'src/app/curso/services/cursos.service';
import { Alumno } from 'src/app/shared/models/alumno';
import { Curso } from 'src/app/shared/models/curso';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent implements OnInit {
  form: UntypedFormGroup;
  curso$!: Observable<Curso[]>;

  constructor(
    private fb: UntypedFormBuilder,
    private curso: CursosService,
    private store: Store<AlumnoState>
    ) {

    let regexCorreo: string = '^[^@]+@[^@]+\.[a-zA-Z]{2,}$';
    this.curso$ = this.curso.obtenerCursosObservable();
    this.form = this.fb.group({
      nombre: new UntypedFormControl('', Validators.required),
      apellido: new UntypedFormControl('', Validators.required),
      curso: new UntypedFormControl('{}', Validators.required),
      comision: new UntypedFormControl('', Validators.required),
      email: new UntypedFormControl('', [Validators.required, Validators.pattern(regexCorreo)])
    })


  }

  ngOnInit(): void {
  }

  createAlumno() {

    let alumno: Alumno = {
      id: NaN,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      curso: this.form.value.curso,
      comision: this.form.value.comision,
      email: this.form.value.email
    }
    this.store.dispatch(createAlumnoState({ alumno: alumno }));

  }

}
