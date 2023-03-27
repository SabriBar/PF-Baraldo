import { Curso } from "./curso";

export interface CursoState{
    cursos: Curso[];
    cargando: boolean;
}