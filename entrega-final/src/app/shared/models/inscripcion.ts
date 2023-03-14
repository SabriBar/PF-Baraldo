import { Alumno } from "./alumno";
import { Curso } from "./curso";
import { Profesor } from "./profesor";


export interface Inscripcion{
    id: number;
    nro: number;
    curso: Curso;
    comision: number;
    alumnoNombre: String;
    alumnoApellido: String;
    profesor: Profesor;
}