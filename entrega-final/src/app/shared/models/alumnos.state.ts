import { Alumno } from "./alumno";

export interface AlumnoState{
    alumnos: Alumno[];
    cargando: boolean;
}