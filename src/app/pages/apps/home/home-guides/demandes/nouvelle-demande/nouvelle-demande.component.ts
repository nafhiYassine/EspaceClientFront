import { Component, AfterViewInit, ViewChild, OnInit, ElementRef } from "@angular/core";
import { LayoutService } from "src/@vex/services/layout.service";
import { DemandeWebConf } from "src/app/models/DemandeWebConf";
import { DemandeWebConfService } from "src/app/services/demandeWebConf.service";
import { TokenStorageService } from "src/app/services/token-storage-service";
import jwt_decode from 'jwt-decode';
import { FileData } from "src/app/models/FileData";
import { DemandeRequest } from "src/app/models/DemandeRequest";

@Component({
  selector: 'vex-nouvelle-demande',
  templateUrl: './nouvelle-demande.component.html',
  styleUrls: ['./nouvelle-demande.component.scss']
})
export class NouvelleDemandeComponent implements OnInit{
  dropdownPopoverShow = false;
  @ViewChild('dropzone') dropzoneElement!: ElementRef;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })

  popoverDropdownRef: ElementRef;
  isDesktop$ = this.layoutService.isDesktop$;
  isBool: boolean;
  codeSujet: string = "empty";
  sujet: string;
  sujetOn: boolean
  codeTheme: string = "empty";
  theme: string;
  themeOn: boolean
  commentaire: string = "";
  demandeWebConfs: DemandeWebConf[] = []
  sujetDemandeWebConfs: DemandeWebConf[] = []
  themeDemandeWebConfs: DemandeWebConf[] = []
  decodedToken: any = jwt_decode(this.tokenStorageService.getToken());
  produit: string;
  filesdata: FileData[] = [];

  constructor(private layoutService: LayoutService, private demandeWebConfService: DemandeWebConfService, private tokenStorageService: TokenStorageService) { }
  
  ngOnInit() {
    const envir = this.decodedToken.aud;
    const typeContrat = this.decodedToken.typcrm;
    this.allow()

    console.log("envir : " + envir)
    if (typeContrat === 'A') {
      this.produit = 'ANIMAUX'
    }
    else {
      this.produit = 'SANTE';
    }
    this.initializeDemandes(envir);

    this.isDesktop$.pipe(
    ).subscribe(isDesktop => {
      if (isDesktop) {
        this.isBool = true;
      } else {
        this.isBool = false;
      }
    });
  }
  allow() {
    const demandeRequest: DemandeRequest = new DemandeRequest;
    demandeRequest.envir = this.decodedToken.aud;
    demandeRequest.numfam= this.decodedToken.jti;
    demandeRequest.numcon=  this.decodedToken.nupomu;
    demandeRequest.idfPol=  this.decodedToken.idfpol;
    demandeRequest.typeDemande= "CONTRAT";
    demandeRequest.sujet=  this.codeSujet;
    demandeRequest.theme=  this.codeTheme;
    demandeRequest.message= this.commentaire ;
    demandeRequest.docs = this.filesdata;
    this.demandeWebConfService.addDemande(demandeRequest.envir,demandeRequest.numfam, this.decodedToken.iss, demandeRequest).subscribe(
      (demandeWebConfs) => {}
    );
    
  }

  filterSujet(): DemandeWebConf[] {
    this.sujetDemandeWebConfs = this.demandeWebConfs.filter(demandeWebConfs => demandeWebConfs.produit === this.produit);
    const dwcMap = new Map<string, DemandeWebConf>();

    this.sujetDemandeWebConfs.forEach(demandeWebConfs => {
      const dwc = demandeWebConfs.codeSujet;
      if (!dwcMap.has(dwc)) {
        dwcMap.set(dwc, demandeWebConfs);
      }
    });
    this.sujetDemandeWebConfs = Array.from(dwcMap.values());
    return this.sujetDemandeWebConfs;
  }

  filterTheme(codeSujet: string): DemandeWebConf[] {
    this.sujetDemandeWebConfs = this.demandeWebConfs.filter(demandeWebConfs => demandeWebConfs.produit === this.produit);
    this.themeDemandeWebConfs = this.sujetDemandeWebConfs.filter(sujetDemandeWebConfs => sujetDemandeWebConfs.codeSujet === codeSujet);
    return this.themeDemandeWebConfs;
  }

  private initializeDemandes(envir: string) {
    this.demandeWebConfService.findDemandeWebConf(envir).subscribe(
      (demandeWebConfs: DemandeWebConf[]) => {
        this.demandeWebConfs = demandeWebConfs;
      }
    );
  }

  deleteFile(fileName : string){
    this.filesdata = this.filesdata.filter(file => file.name !== fileName);
  }

  onSelectSujet(event: Event): void {
    this.codeSujet = (event.target as HTMLSelectElement).value;
    if (this.codeSujet === "empty") {
      this.sujetOn = false;
    }
    else this.sujetOn = true
    this.themeOn = false;
    this.codeTheme = 'empty'
  }

  onSelectTheme(event: Event): void {
    this.codeTheme = (event.target as HTMLSelectElement).value;
    if (this.codeTheme === "empty") {
      this.themeOn = false;
    }
    else this.themeOn = true
  }

  handleFileInput(event: any) {
    const selectedFiles: FileList = event.target.files;
    
    if (selectedFiles && selectedFiles.length > 0) {
      // Process the selected files
      this.processFiles(selectedFiles);
    }
  }

  processFiles(files: FileList){
    // Do whatever you want with the selected files
    for (let i = 0; i < files.length; i++) {
      const file: File = files.item(i);
      const fd : FileData = new FileData; 
      this.convertFileToBase64(file).then(base64 => {
        fd.name=file.name;
        fd.content=base64;
        this.filesdata.push(fd);
      });
    }
  }

  async convertFileToBase64(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        const arrayBuffer = event.target.result;
        const uint8Array = new Uint8Array(arrayBuffer);
        const base64Content = this.uint8ArrayToBase64(uint8Array);
        resolve(base64Content);
      };

      reader.onerror = (event: any) => {
        reject('Error converting file to base64');
      };

      reader.readAsArrayBuffer(file);
    });
  }
  uint8ArrayToBase64(uint8Array: Uint8Array): string {
    let binary = '';
    uint8Array.forEach(byte => {
      binary += String.fromCharCode(byte);
    });
    return btoa(binary);
  }

}
