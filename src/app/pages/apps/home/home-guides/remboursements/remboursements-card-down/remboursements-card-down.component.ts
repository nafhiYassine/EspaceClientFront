import { Component, Input, OnInit } from '@angular/core';
import { Prestation } from 'src/app/models/Prestation';
import { Acte } from 'src/app/models/acte';
import { DocumentPrestationService } from 'src/app/services/document-prestation.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'vex-remboursements-card-down',
  templateUrl: './remboursements-card-down.component.html',
  styleUrls: ['./remboursements-card-down.component.scss']
})
export class RemboursementsCardDownComponent implements OnInit {
  @Input()
  prestation: Prestation;
  listActes: Acte[];
  document: string;
  constructor(private documentPrestationService: DocumentPrestationService, private sharedService: SharedDataService) {

  }
  ngOnInit(): void {
    console.log("prestation +++++++++++++++++++++++++++++++++++++", this.prestation.actes)
    this.listActes = this.prestation.actes;
  }

  getDocument(prestation: Prestation) {
    let idfpol = this.sharedService.authObj.idfpol;
    let idfass = this.sharedService.authObj.idfass;
    let envir = this.sharedService.authObj.envir;

    console.log("numero sinistre :" +prestation.numeroSinistre)

    this.documentPrestationService.getDocument(idfpol, prestation.numeroSinistre, idfass, envir).subscribe
      ((res: any) => {
console.log("resultat res:"+res.headers)

      const pdfBlob = new Blob([res],  { type: res.type.toString() });
      const blobUrl = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = blobUrl;
      console.log(res.headers)
      // const contentDispositionHeader = res.headers.get('content-disposition');
      // const fileNameMatch = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(contentDispositionHeader);
      // const fileName = fileNameMatch && fileNameMatch[1];
      link.download ="DEC"+this.addLeadingZero(idfass,10)+prestation.numeroSinistre ;
      link.click();
      }
      )

  }
  addLeadingZero(num, size) {
    let s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
}
