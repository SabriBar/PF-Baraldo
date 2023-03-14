import { Profesor } from "./profesor";

export interface Curso{
    id: number;
    nombre: string;
    comision: number;
    profesor: Profesor;
    inscripcionAbierta: string;
} 