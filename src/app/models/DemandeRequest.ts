import { FileData } from "./FileData";

export class DemandeRequest {
    envir:string;
    numfam:string;
    numcon:string;
    idfPol:string;
    typeDemande:string;
    sujet:string;
    theme:string;
    message:string ;
    docs:FileData[];
}