import { Animal } from "./Animal";
import { Beneficiaire } from "./Beneficiaire";
import { Acte } from "./acte";

export class Prestation{
  numeroSinistre:String;
  actes:Acte[] ;
  total:number;
  santeBenef:Beneficiaire;
  animal:Animal;


}
