import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProfesorService } from 'src/app/core/services/profesor.service';
import { CursosService } from 'src/app/curso/services/cursos.service';
import { createInscripcionState } from 'src/app/inscripciones/state/inscripcion-state.actions';
import { InscripcionState } from 'src/app/inscripciones/state/inscripcion-state.reducer';
import { Curso } from 'src/app/shared/models/curso';
import { Inscripcion } from 'src/app/shared/models/inscripcion';
import { Profesor } from 'src/app/shared/models/profesor';

@Component({
  selector: 'app-agregar-inscripcion',
  templateUrl: './agregar-inscripcion.component.html',
  styleUrls: ['./agregar-inscripcion.component.css']
})
export class AgregarInscripcionComponent implements OnInit {

  form: UntypedFormGroup;
  curso$!: Observable<Curso[]>;
  profesor$!: Observable<Profesor[]>;


  constructor(
    private fb: UntypedFormBuilder,
    private profesor: ProfesorService,
    private store: Store<InscripcionState>,
    private curso: CursosService,
  ) {

    this.profesor$ = this.profesor.obtenerProfesores();
    this.curso$ = this.curso.obtenerCursosObservable();
    this.form = this.fb.group({
      curso: new UntypedFormControl('{}', Validators.required),
      comision: new UntypedFormControl('', Validators.required),
      alumnoNombre: new UntypedFormControl('', Validators.required),
      alumnoApellido: new UntypedFormControl('', Validators.required),
      profesor: new UntypedFormControl('{}', Validators.required,)
    })


  }

  ngOnInit(): void {
  }

  createInscripcion() {

    let inscripcion: Inscripcion = {
      id: NaN,
      nro: NaN,
      curso: this.form.value.curso,
      comision: this.form.value.comision,
      alumnoNombre: this.form.value.alumnoNombre,
      alumnoApellido: this.form.value.alumnoApellido,
      profesor: this.form.value.profesor
    }
    this.store.dispatch(createInscripcionState({ inscripcion: inscripcion }));

  }

} 



