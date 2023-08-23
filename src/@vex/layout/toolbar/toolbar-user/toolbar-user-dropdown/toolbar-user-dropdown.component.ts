import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item.interface';
import { trackById } from '../../../../utils/track-by';
import { PopoverRef } from '../../../../components/popover/popover-ref';
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

  constructor(private popoverRef: PopoverRef<ToolbarUserDropdownComponent>,
              private tokenStorage : TokenStorageService) { }

  ngOnInit() {
    this.fullName = this.tokenStorage.getFullName();
  }

  close() {
    this.popoverRef.close();
  }

  logout() {
    this.tokenStorage.signOut();
  }
}
