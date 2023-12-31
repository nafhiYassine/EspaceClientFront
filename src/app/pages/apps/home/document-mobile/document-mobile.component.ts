import { Component } from '@angular/core';
import { DocumentsService } from 'src/app/services/documents.service';
import { saveAs } from 'file-saver';
import { TokenStorageService } from 'src/app/services/token-storage-service';
import { DocumentResponse } from 'src/app/models/DocumentsResponse';
import jwt_decode from 'jwt-decode';
import { LayoutService } from 'src/@vex/services/layout.service';
@Component({
  selector: 'vex-document-mobile',
  templateUrl: './document-mobile.component.html',
  styleUrls: ['./document-mobile.component.scss']
})
export class DocumentMobileComponent {
  isBool = false;
  documentsGene: any[] = [];
  documentsNor: any[] = [];
  DocEcheancier: { base64: string, name: string }[] = [];
  documents: string[]
  constructor(private documentService: DocumentsService,private tokenStorage : TokenStorageService ,private layoutService: LayoutService) {}
  isDesktop$ = this.layoutService.isDesktop$;

  ngOnInit(): void {
    
    this.isDesktop$.pipe(
      ).subscribe(isDesktop => {
        if (isDesktop) {
          this.isBool = true;
        } else {
          this.isBool = false;
        }
      });

    console.log("----------@",this.getDecodedAccessToken(this.tokenStorage.getToken()));
    const resultToken = this.getDecodedAccessToken(this.tokenStorage.getToken());
    const envir = resultToken.aud
     const idfass = resultToken.jti
     const idfpol = resultToken.idfpol

    this.documentService.getEcheancierDoc(idfpol, idfass, envir).subscribe(
      (base64Docs: string[]) => {
        console.log("-------------------------->@@@", base64Docs);
        this.DocEcheancier = base64Docs.map((base64Doc, index) => {
          return {
            base64: base64Doc,
            name: `Document echeancier.pdf` // You can customize the name based on your data
          };
        });
      },
      (error) => {
        console.error('Error fetching documents:', error);
      }
    );
    
    
    this.documentService.getDocuments(envir,idfass).subscribe(
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
    
    // this.documentService.getDocumentsGenerique().subscribe(
    //   (documentResponse: DocumentResponse) => {
    //     this.documentsGene = Object.keys(documentResponse).map((fileName, index) => {
    //       return {
    //         base64: documentResponse[fileName],
    //         name: fileName 
    //       };
    //     });
    //   },
    //   (error) => {
    //     console.error('Error fetching documents:', error);
    //   }
    // );

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
    } catch(Error) {
      return null;
    }
  }
}
