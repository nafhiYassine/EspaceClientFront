import { Animal } from "./Animal";
import { IContrat } from "./IContrat";
import { Prestation } from "./Prestation";

export class ContratAnimal extends IContrat{
    animal:Animal;
    listAnimal:Animal[];
    listPrestation:Prestation[];

}