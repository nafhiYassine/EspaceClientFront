import { Animal } from "./Animal";
import { IContrat } from "./IContrat";

export class ContratAnimal extends IContrat{
    animal:Animal;
    listAnimal:Animal[];
}