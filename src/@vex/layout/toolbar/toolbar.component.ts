import { Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { ConfigService } from '../../config/config.service';
import { map, startWith, switchMap } from 'rxjs/operators';
import { NavigationService } from '../../services/navigation.service';
import { PopoverService } from '../../components/popover/popover.service';
import { MegaMenuComponent } from '../../components/mega-menu/mega-menu.component';
import { Observable, of } from 'rxjs';
import { DocumentsService } from 'src/app/services/documents.service';
import { WebConf } from 'src/app/models/WebConf';
import { AuthObject } from 'src/app/models/AuthObject';
import { TokenStorageService } from 'src/app/token-storage-service';
import jwt_decode from 'jwt-decode';
import * as CryptoJS from 'crypto-js';
import { SECRET_KEY } from '../../../app/commons/url.constants';

@Component({
  selector: 'vex-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Input() mobileQuery: boolean;
  @Input()
  @HostBinding('class.shadow-b')
  hasShadow: boolean;

  navigationItems = this.navigationService.items;
  decodedToken: any = jwt_decode(this.tokenStorage.getToken());
  authObj: AuthObject = new AuthObject;
  isHorizontalLayout$: Observable<boolean> = this.configService.config$.pipe(map(config => config.layout === 'horizontal'));
  isVerticalLayout$: Observable<boolean> = this.configService.config$.pipe(map(config => config.layout === 'vertical'));
  isNavbarInToolbar$: Observable<boolean> = this.configService.config$.pipe(map(config => config.navbar.position === 'in-toolbar'));
  isNavbarBelowToolbar$: Observable<boolean> = this.configService.config$.pipe(map(config => config.navbar.position === 'below-toolbar'));
  userVisible$: Observable<boolean> = this.configService.config$.pipe(map(config => config.toolbar.user.visible));
  isDesktop$ = this.layoutService.isDesktop$;
  isMobile$ = this.layoutService.isMobile$;
  icone: string;
  imageSrc: any;
  webconf: WebConf


  megaMenuOpen$: Observable<boolean> = of(false);

  constructor(private layoutService: LayoutService,
    private configService: ConfigService,
    private navigationService: NavigationService,
    private popoverService: PopoverService,
    private documentService: DocumentsService,
    private tokenStorage: TokenStorageService) { }
    
  ngOnInit(): void {
    if (localStorage.getItem('webconf')) {
      const serializedWebConf: string = localStorage.getItem('webconf');
      const decryptedBytes = CryptoJS.AES.decrypt(serializedWebConf, SECRET_KEY);
      const decryptedWebConf = decryptedBytes.toString(CryptoJS.enc.Utf8);
      this.webconf = JSON.parse(decryptedWebConf);
      this.icone = this.webconf.logoBase64;
      const ext = this.webconf.logo.split(".")[1];
      const blob = this.dataURLtoBlob(this.webconf.logoBase64, ext);
      this.imageSrc = URL.createObjectURL(blob);
    }
    else { this.loadImage(); }
  }

  private loadImage() {
    this.documentService.getWebConf(this.decodedToken.jti, this.decodedToken.aud).subscribe(
      (documentResponse: WebConf) => {
        // Storing the webconf in local storage
        const encryptedData: string = CryptoJS.AES.encrypt(JSON.stringify(documentResponse), SECRET_KEY).toString()
        localStorage.setItem('webconf', encryptedData)

        this.icone = documentResponse.logoBase64;
        const ext = documentResponse.logo.split(".")[1];
        const blob = this.dataURLtoBlob(documentResponse.logoBase64, ext);
        this.imageSrc = URL.createObjectURL(blob);
      },
      (error) => {
        console.error('Error fetching documents:', error);
      }
    );
  }

  dataURLtoBlob(dataURL: string, extension: string): Blob {
    const bstr = atob(dataURL);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: "image/" + extension });
  }


  openQuickpanel(): void {
    this.layoutService.openQuickpanel();
  }

  openSidenav(): void {
    this.layoutService.openSidenav();
  }

  openMegaMenu(origin: ElementRef | HTMLElement): void {
    this.megaMenuOpen$ = of(
      this.popoverService.open({
        content: MegaMenuComponent,
        origin,
        offsetY: 12,
        position: [
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top'
          },
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
          },
        ]
      })
    ).pipe(
      switchMap(popoverRef => popoverRef.afterClosed$.pipe(map(() => false))),
      startWith(true),
    );
  }

  openSearch(): void {
    this.layoutService.openSearch();
  }
}
