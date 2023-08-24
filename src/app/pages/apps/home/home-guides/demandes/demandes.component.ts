import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { TableColumn } from '../../../../../../@vex/interfaces/table-column.interface';
import { aioTableData, aioTableLabels } from '../../../../../../static-data/aio-table-data';
import { SelectionModel } from '@angular/cdk/collections';
import { fadeInUp400ms } from '../../../../../../@vex/animations/fade-in-up.animation';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { stagger40ms } from '../../../../../../@vex/animations/stagger.animation';
import { UntypedFormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatSelectChange } from '@angular/material/select';
import { DemandeService } from 'src/app/services/demandes.service';
import jwt_decode from 'jwt-decode';
import { Demande } from 'src/app/models/Demande';
import { TokenStorageService } from 'src/app/services/token-storage-service';
import { SECRET_KEY } from '../../../../../commons/url.constants';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';



@UntilDestroy()
@Component({
  selector: 'vex-aio-table',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.scss'],
})
export class DemandesComponent implements OnInit{
  decodedToken: any = jwt_decode(this.tokenStorage.getToken());
  showHelloWorldCard = false;
  demandes : Demande[] = [];
  toggleHelloWorldCard() {
    this.showHelloWorldCard = !this.showHelloWorldCard;
  }

  constructor(
    private demandeService : DemandeService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.retrieveDemandes();
  }
  private retrieveDemandes() {
    const idfass= this.decodedToken.jti;
    const envir= this.decodedToken.aud;
    if (localStorage.getItem('demandes')) {
      const serializedDemandes: string = localStorage.getItem('demandes');
      const decryptedBytes = CryptoJS.AES.decrypt(serializedDemandes, SECRET_KEY);
      const decryptedDemandesString = decryptedBytes.toString(CryptoJS.enc.Utf8);
      this.demandes = JSON.parse(decryptedDemandesString);
    }
    else {
      this.initializeDemandes(envir,idfass);
    }
  }
  ajouterDemande() {
    this.router.navigate(['/nouvelle-demande']);
  }
  

  private initializeDemandes(envir : string, idfass : string) {
    this.demandeService.findDemandes(envir,idfass).subscribe(
      (demandes:  Demande[]) => {
        this.demandes = demandes;
        console.log(JSON.stringify(this.demandes))
        const encryptedData : string = CryptoJS.AES.encrypt(JSON.stringify(this.demandes), SECRET_KEY).toString()
        localStorage.setItem('demandes',encryptedData);
      }
    );
  }
}
