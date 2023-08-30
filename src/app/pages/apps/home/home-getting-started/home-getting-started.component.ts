import { Component, OnInit } from '@angular/core';
import { DocumentsService } from 'src/app/services/documents.service';
import { saveAs } from 'file-saver';
import { TokenStorageService } from 'src/app/services/token-storage-service';
import { DocumentResponse } from 'src/app/models/DocumentsResponse';
import jwt_decode from 'jwt-decode';
import { LayoutService } from 'src/@vex/services/layout.service';
import { Document } from 'src/app/models/Document';


@Component({
  selector: 'vex-home-getting-started',
  templateUrl: './home-getting-started.component.html',
  styleUrls: ['./home-getting-started.component.scss']
})
export class HomeGettingStartedComponent implements OnInit {
  isBool = false;
  documentsGene: any[] = [];
  documentsNor: any[] = [];
  DocEcheancier: { base64: string, name: string }[] = [];
  documents: string[]
  // resultToken :string[]
   numberOfTabs = 9; 
  detailsTab: boolean[] = Array.from({ length: this.numberOfTabs }, () => false);
  cardData : Document[];
  isDuplicate: boolean[] = [];
  constructor(private documentService: DocumentsService, private tokenStorage: TokenStorageService, private layoutService: LayoutService) { }
  isDesktop$ = this.layoutService.isDesktop$;

    resultToken = this.getDecodedAccessToken(this.tokenStorage.getToken());
    envir = this.resultToken.aud
     idfass = this.resultToken.jti
     idfpol = this.resultToken.idfpol
  ngOnInit(): void {

  
    console.log("idfpolll->",this.idfass)
    this.isDesktop$.pipe(
    ).subscribe(isDesktop => {
      if (isDesktop) {
        this.isBool = true;
      } else {
        this.isBool = false;
      }
    });

    
    this.documentService.getDocumentsFromback(this.envir,this.idfass).subscribe(
      (cardData : Document[] ) => {
          this.cardData = cardData;
          for (const item of cardData) {
            console.log(item.enviro);
          }

      },
      (error) => {
        console.error('Error fetching documents:', error);
      }
    );

  //   const resultToken = this.getDecodedAccessToken(this.tokenStorage.getToken());
  //   const envir = resultToken.aud
  //   const idfass = resultToken.jti
  //   const idfpol = resultToken.idfpol
  //   // console.log("----------@",this.getDecodedAccessToken(this.tokenStorage.getToken()));
  

  //   // this.documentService.EcheancierDoc(idfpol, idfass, envir).subscribe(
  //   //   (base64Doc: string) => {
  //   //     this.DocEcheancier = [{
  //   //       base64: base64Doc,
  //   //       name: `Document.pdf` // You can customize the name based on your data
  //   //     }];
  //   //   },
  //   //   (error) => {
  //   //     console.error('Error fetching documents:', error);
  //   //   }
  //   // );

  //   this.documentService.getEcheancierDoc(idfpol, idfass, envir).subscribe(
  //     (base64Docs: string[]) => {
  //       this.DocEcheancier = base64Docs.map((base64Doc, index) => {
  //         return {
  //           base64: base64Doc,
  //           name: `Document echeancier.pdf` // You can customize the name based on your data
  //         };
  //       });
  //     },
  //     (error) => {
  //       console.error('Error fetching documents:', error);
  //     }
  //   );


  //   this.documentService.getDocuments(envir, idfass).subscribe(
  //     (documentResponse: DocumentResponse) => {
  //       this.documentsNor = Object.keys(documentResponse).map((fileName, index) => {
  //         return {
  //           base64: documentResponse[fileName],
  //           name: fileName

  //         };
  //       });
  //     },
  //     (error) => {
  //       console.error('Error fetching documents:', error);
  //     }
  //   );

    this.documentService.getDocumentsGenerique(this.envir,this.idfass).subscribe(
      (documentResponse: DocumentResponse) => {
        this.documentsGene = Object.keys(documentResponse).map((fileName, index) => {
          return {
            base64: documentResponse[fileName],
            name: fileName
          };
        });
      },
      (error) => {
        console.error('Error fetching documents:', error);
      }
    );
  
  }

  

  downloadDocumentNormal(documentsNor: any): void {
    const byteCharacters = atob(documentsNor.base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const pdfBlob = new Blob([byteArray], { type: 'application/pdf' });

    saveAs(pdfBlob, documentsNor.name);
  }

  downloadDocumentGenerique(documentsGene: any): void {
    const byteCharacters = atob(documentsGene.base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const pdfBlob = new Blob([byteArray], { type: 'application/pdf' });

    saveAs(pdfBlob, documentsGene.name);
  }

  echeancierDoc(DocEcheancier: any): void {
    const byteCharacters = atob(DocEcheancier.base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const pdfBlob = new Blob([byteArray], { type: 'application/pdf' });

    saveAs(pdfBlob, DocEcheancier.name);
  }
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }


  Solution1(typDoc :string,number :Number ){
    this.detailsTab = this.detailsTab.map((detail, i) => i === number ? !detail : false);

 

    this.documentService.getDocumentsSolution1(this.envir, this.idfass,typDoc).subscribe(
      //   const resultToken = this.getDecodedAccessToken(this.tokenStorage.getToken());
  //   const envir = resultToken.aud
  //   const idfass = resultToken.jti
  //   const idfpol = resultToken.idfpol
      (documentResponse: DocumentResponse) => {
        
        this.documentsNor = Object.keys(documentResponse).map((fileName, index) => {
          return {
            base64: documentResponse[fileName],
            name: fileName

          };
        });
      },
      (error) => {
        console.error('Error fetching documents:', error);
      }
    );
 }

 
}
