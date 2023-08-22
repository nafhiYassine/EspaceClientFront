import { Component, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from '../../@vex/services/layout.service';
import { filter, map, startWith } from 'rxjs/operators';
import { Data, NavigationEnd, Router } from '@angular/router';
import { checkRouterChildsData } from '../../@vex/utils/check-router-childs-data';
import { ConfigService } from '../../@vex/config/config.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SidebarComponent } from '../../@vex/components/sidebar/sidebar.component';
import jwt_decode from 'jwt-decode';
import { TokenStorageService } from '../token-storage-service';
import { AuthObject } from '../models/AuthObject';




@UntilDestroy()
@Component({
  selector: 'vex-custom-layout',
  templateUrl: './custom-layout.component.html',
  styleUrls: ['./custom-layout.component.scss']
})
export class CustomLayoutComponent implements OnInit {

  sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;
  isFooterVisible$ = this.configService.config$.pipe(map(config => config.footer.visible));
  isDesktop$ = this.layoutService.isDesktop$;
  isBool: boolean;
  decodedToken: any = jwt_decode(this.tokenStorage.getToken());
  data: Data;
  authObj: AuthObject = new AuthObject;
  icone: string;
  imageSrc: string;


  toolbarShadowEnabled$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    startWith(null),
    map(() => checkRouterChildsData(this.router.routerState.root.snapshot, data => data.toolbarShadowEnabled))
  );
  @ViewChild('configpanel', { static: true }) configpanel: SidebarComponent;

  constructor(private layoutService: LayoutService,
    private configService: ConfigService,
    private router: Router,
    private tokenStorage: TokenStorageService,) { }

  ngOnInit() {
    this.layoutService.configpanelOpen$.pipe(
      untilDestroyed(this)
    ).subscribe(open => open ? this.configpanel.open() : this.configpanel.close());
    this.isDesktop$.pipe(
    ).subscribe(isDesktop => {
      if (isDesktop) {
        this.isBool = true;
      } else {
        this.isBool = false;
      }
    });
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
}
