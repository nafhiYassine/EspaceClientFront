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

  // base64Docs: string[] = [];
  documentUrl: any;
  documents: any[] = [];
  documentsGene: any[] = [];
  constructor(private documentService: DocumentsService,private tokenStorage : TokenStorageService) {}

  // getDocuments() {
  //   this.documentService.getDocuments()
  //     .subscribe((base64Documents: string[]) => {
  //       this.base64Documents = base64Documents;
  //       console.log(base64Documents[0]);
  //     });
  // }

  // getDocumentUrl(base64Document: string): string {
  //   // You can set the document URL in an anchor tag with the Base64 data.
  //   return `data:application/pdf;base64,${base64Document}`;
  //   // Adjust the 'data' part based on the type of document you are dealing with (e.g., 'image/png', 'application/msword', etc.)
  // }
  // getBlobUrl(base64String: string): string {
  //   const byteCharacters = atob(base64String);
  //   const byteNumbers = new Array(byteCharacters.length);
  //   for (let i = 0; i < byteCharacters.length; i++) {
  //     byteNumbers[i] = byteCharacters.charCodeAt(i);
  //   }
  //   const byteArray = new Uint8Array(byteNumbers);
  //   const blob = new Blob([byteArray], { type: 'application/pdf' }); // Adjust the type based on your document type.

  //   return URL.createObjectURL(blob);
  // }
  ngOnInit(): void {
    
    console.log("----------@",this.getDecodedAccessToken(this.tokenStorage.getToken()));
    
    
    this.documentService.getDocuments().subscribe(
      (base64Docs: string[]) => {
        this.documents = base64Docs.map((base64Doc, index) => {
          return {
            base64: base64Doc,
            name: `Document${index + 1}.pdf` // You can customize the name based on your data
          };
        });
      },
      (error) => {
        console.error('Error fetching documents:', error);
      }
    );
    
    this.documentService.getDocumentsGenerique().subscribe(
      (documentResponse: DocumentResponse) => {
        // Convert the properties of DocumentResponse into an array of objects
        this.documentsGene = Object.keys(documentResponse).map((fileName, index) => {
          return {
            base64: documentResponse[fileName],
            name: fileName // The file name is now extracted directly from the property name
          };
        });
      },
      (error) => {
        console.error('Error fetching documents:', error);
      }
    );

  }
  downloadDocument(document: any): void {
    const byteCharacters = atob(document.base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const pdfBlob = new Blob([byteArray], { type: 'application/pdf' });

    saveAs(pdfBlob, document.name);
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
