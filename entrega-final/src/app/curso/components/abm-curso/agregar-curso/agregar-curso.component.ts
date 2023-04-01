import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProfesorService } from 'src/app/core/services/profesor.service';
import { AbmService } from 'src/app/curso/services/abm.service';
import { createCursoState } from 'src/app/curso/state/curso-state.actions';
import { CursoState } from 'src/app/curso/state/curso-state.reducer';
import { Curso } from 'src/app/shared/models/curso';
import { Profesor } from 'src/app/shared/models/profesor';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit {
  form!: UntypedFormGroup;
  inscripcion: any[] = ['Abierta', 'Cerrada'];

  //ejemplo de array para testing
  cursos: Curso[] = [
    {
      "nombre": "Angular",
      "comision": 100,
      "profesor": {
        "id": 1,
        "nombre": "Garrison",
        "correo": "mrGarrison@gmail.com"
      },
      "inscripcionAbierta": "Abierta",
      "id": 1
    }];
  profesor$!: Observable<Profesor[]>;

  constructor(
    private fb: UntypedFormBuilder,
    private profesor: ProfesorService,
    private store: Store<CursoState>
  ) {

    this.profesor$ = this.profesor.obtenerProfesores();
    this.form = this.fb.group({
      nombre: new UntypedFormControl('', Validators.required),
      comision: new UntypedFormControl('', Validators.required),
      profesor: new UntypedFormControl('{}', Validators.required),
      inscripcionAbierta: new UntypedFormControl('', Validators.required),
    });

   }

  ngOnInit(): void {

  }

  createCurso() {
   
   let curso: Curso = {
    id: NaN,
    nombre: this.form.value.nombre,
    comision: this.form.value.comision,
    profesor: this.form.value.profesor,
    inscripcionAbierta: this.form.value.inscripcionAbierta,
   }
   this.store.dispatch(createCursoState({ curso: curso}));
    
  }
}

