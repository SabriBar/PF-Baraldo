import { Curso } from "./curso";

export interface Alumno{
    id: number;
    nombre: string;
    apellido: string;
    curso: Curso;
    comision: number;
    email: string;
}