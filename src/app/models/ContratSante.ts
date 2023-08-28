import { Beneficiaire } from "./Beneficiaire";
import { IContrat } from "./IContrat";
import { Prestation } from "./Prestation";



export class ContratSante extends IContrat{

    listeBeneficiaire:Beneficiaire[];
    prestations:Prestation[];
}
