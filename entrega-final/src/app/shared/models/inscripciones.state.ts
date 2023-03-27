import { Inscripcion } from "./inscripcion";

export interface InscripcionState{
    inscripciones: Inscripcion[];
    cargando: boolean;
}