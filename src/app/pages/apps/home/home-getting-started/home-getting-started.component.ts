import { Component, OnInit } from '@angular/core';
import { DocumentsService } from 'src/app/services/documents.service';
import { saveAs } from 'file-saver';
import { TokenStorageService } from 'src/app/token-storage-service';
import { DocumentResponse } from 'src/app/models/DocumentsResponse';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'vex-home-getting-started',
  templateUrl: './home-getting-started.component.html',
  styleUrls: ['./home-getting-started.component.scss']
})
export class HomeGettingStartedComponent implements OnInit {

  documentsGene: any[] = [];
  documentsNor: any[] = [];
  constructor(private documentService: DocumentsService,private tokenStorage : TokenStorageService) {}
  ngOnInit(): void {
    
    console.log("----------@",this.getDecodedAccessToken(this.tokenStorage.getToken()));
    const resultToken = this.getDecodedAccessToken(this.tokenStorage.getToken());
    const envir = resultToken.aud
     const idfass = resultToken.jti 
    // this.documentService.getDocuments(envir,idfass).subscribe(
    //   (base64Docs: string[]) => {
    //     this.documents = base64Docs.map((base64Doc, index) => {
    //       return {
    //         base64: base64Doc,
    //         name: `Document${index + 1}.pdf` // You can customize the name based on your data
    //       };
    //     });
    //   },
    //   (error) => {
    //     console.error('Error fetching documents:', error);
    //   }
    // );
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
    
    this.documentService.getDocumentsGenerique().subscribe(
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

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
}
