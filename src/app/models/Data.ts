import { ContratSante } from "./ContratSante";
import { IContrat } from "./IContrat";
import { Compte } from "./Compte";
import { Souscripteur } from "./Souscripteur";

export class Data{

    souscripteur?:Souscripteur;
    listeContrats?: Array<IContrat>;

}
