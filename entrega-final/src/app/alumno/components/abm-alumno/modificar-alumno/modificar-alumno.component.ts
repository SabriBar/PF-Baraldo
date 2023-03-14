import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AbmService } from 'src/app/alumno/services/abm.service';
import { CursosService } from 'src/app/curso/services/cursos.service';
import { Alumno } from 'src/app/shared/models/alumno';
import { Curso } from 'src/app/shared/models/curso';

@Component({
  selector: 'app-modificar-alumno',
  templateUrl: './modificar-alumno.component.html',
  styleUrls: ['./modificar-alumno.component.css']
})
export class ModificarAlumnoComponent implements OnInit {
  formulario!: UntypedFormGroup;
  curso$!: Observable<Curso[]>;
  actionBtn: string = "Guardar";

  constructor(
    private abmService: AbmService,
    private snackBar: MatSnackBar,
    private curso: CursosService,
    @Inject(MAT_DIALOG_DATA) public alumno: Alumno,
    private dialogRef: MatDialogRef<ModificarAlumnoComponent>  
  ) {
  }

  ngOnInit(): void {
      let regexCorreo: string = '^[^@]+@[^@]+\.[a-zA-Z]{2,}$';
      this.curso$ = this.curso.obtenerCursosObservable();
      this.formulario = new UntypedFormGroup({
        nombre: new UntypedFormControl('', Validators.required),
        apellido: new UntypedFormControl('', Validators.required),
        curso: new UntypedFormControl('{}', Validators.required),
        comision: new UntypedFormControl('', Validators.required),
        email: new UntypedFormControl('', [Validators.required, Validators.pattern(regexCorreo)])
      });

      if(this.alumno){
        this.actionBtn = "Guardar"
        this.formulario.controls['nombre'].setValue(this.alumno.nombre);
        this.formulario.controls['apellido'].setValue(this.alumno.apellido);
        this.formulario.controls['curso'].setValue(this.alumno.curso);
        this.formulario.controls['comision'].setValue(this.alumno.comision);
        this.formulario.controls['email'].setValue(this.alumno.email);
      }
  }

  editAlumno() {
    this.abmService.editAlumno(this.formulario.value, this.alumno.id)
    .subscribe({
      next:(res)=>{
        this.snackBar.open('  Alumno modificado correctamente', '', {
          duration: 1500,
          horizontalPosition: 'left',
          verticalPosition: 'bottom'
        });
        this.formulario.reset();
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


