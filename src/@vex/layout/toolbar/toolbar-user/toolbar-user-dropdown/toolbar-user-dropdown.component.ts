import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item.interface';
import { trackById } from '../../../../utils/track-by';
import { PopoverRef } from '../../../../components/popover/popover-ref';
import { SharedDataService } from 'src/app/services/shared-data.service';

export interface OnlineStatus {
  id: 'online' | 'away' | 'dnd' | 'offline';
  label: string;
  icon: string;
  colorClass: string;
}
import { TokenStorageService } from 'src/app/services/token-storage-service';

@Component({
  selector: 'vex-toolbar-user-dropdown',
  templateUrl: './toolbar-user-dropdown.component.html',
  styleUrls: ['./toolbar-user-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarUserDropdownComponent implements OnInit {

  items: MenuItem[] = [
    {
      id: '1',
      icon: 'mat:account_circle',
      label: 'My Profile',
      description: 'Personal Information',
      colorClass: 'text-teal',
      route: '/apps/social'
    }
  ];
  fullName : string


  trackById = trackById;

  constructor(private cd: ChangeDetectorRef,
              private popoverRef: PopoverRef<ToolbarUserDropdownComponent>,
              private tokenStorage : TokenStorageService,
              private sharedDataService:SharedDataService) { }

  ngOnInit() {
    this.fullName = this.tokenStorage.getFullName();
  }

  close() {
    this.popoverRef.close();
  }

  logout() {
    this.sharedDataService.clearAuthObj();
    this.tokenStorage.signOut();
  }
}
