import { Beneficiaire } from "./Beneficiaire";
import { IContrat } from "./IContrat";



export class ContratSante extends IContrat{
   
    listBeneficiaires:Beneficiaire[];
}