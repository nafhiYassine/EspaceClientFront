import { Animal } from "./Animal";
import { IContrat } from "./IContrat";
import { Prestation } from "./Prestation";
import { Compte } from "./Compte";

export class ContratAnimal extends IContrat{
    animal:Animal;
    listAnimal:Animal[];
    infosBancaires:Compte;
    listPrestation:Prestation[];
    formules:string[];

}
