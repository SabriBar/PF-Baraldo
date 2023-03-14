import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfesorService } from 'src/app/core/services/profesor.service';
import { CursosService } from 'src/app/curso/services/cursos.service';
import { AbmService } from 'src/app/inscripciones/service/abm.service';
import { Curso } from 'src/app/shared/models/curso';
import { Inscripcion } from 'src/app/shared/models/inscripcion';
import { Profesor } from 'src/app/shared/models/profesor';

@Component({
  selector: 'app-modificar-inscripcion',
  templateUrl: './modificar-inscripcion.component.html',
  styleUrls: ['./modificar-inscripcion.component.css']
})
export class ModificarInscripcionComponent implements OnInit {

  form!: UntypedFormGroup;
  curso$!: Observable<Curso[]>;
  actionBtn: string = "Guardar";
  profesor$!: Observable<Profesor[]>;

  constructor(
    private abmService: AbmService,
    private profesor: ProfesorService,
    private snackBar: MatSnackBar,
    private curso: CursosService,
    @Inject(MAT_DIALOG_DATA) public inscripcion: Inscripcion,
    private dialogRef: MatDialogRef<ModificarInscripcionComponent>
    ) { }

  ngOnInit(): void {
    this.profesor$ = this.profesor.obtenerProfesores();
    this.curso$ = this.curso.obtenerCursosObservable();
      this.form = new UntypedFormGroup({
        curso: new UntypedFormControl('{}', Validators.required),
        comision: new UntypedFormControl('', Validators.required),
        alumnoNombre: new UntypedFormControl('', Validators.required),
        alumnoApellido: new UntypedFormControl('', Validators.required),
        profesor: new UntypedFormControl('{}', Validators.required),
      });

      if(this.inscripcion){
        this.actionBtn = "Guardar"
        this.form.controls['curso'].setValue(this.inscripcion.curso);
        this.form.controls['comision'].setValue(this.inscripcion.comision);
        this.form.controls['alumnoNombre'].setValue(this.inscripcion.alumnoNombre);
        this.form.controls['alumnoApellido'].setValue(this.inscripcion.alumnoApellido);
        this.form.controls['profesor'].setValue(this.inscripcion.profesor);
      }
  }

  editInscripcion() {
    this.abmService.editInscripcion(this.form.value, this.inscripcion.id)
    .subscribe({
      next:(res)=>{
        this.snackBar.open('  Alumno modificado correctamente', '', {
          duration: 1500,
          horizontalPosition: 'left',
          verticalPosition: 'bottom'
        });
        this.form.reset();
        this.dialogRef.close('guardar');
      },
      error:()=>{
        this.snackBar.open(' Error al modificar Alumno', '', {
          duration: 1500,
          horizontalPosition: 'left',
          verticalPosition: 'bottom'
        });
      }
    })
  }

}
