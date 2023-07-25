import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'vex-toolbar-search',
  templateUrl: './second-toolbar-search.component.html',
  styleUrls: ['./second-toolbar-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondToolbarSearchComponent implements OnInit {

  isOpen: boolean;

  @ViewChild('input', { read: ElementRef, static: true }) input: ElementRef;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
  }

  open() {
    this.isOpen = true;
    this.cd.markForCheck();

    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 100);
  }

  close() {
    this.isOpen = false;
    this.cd.markForCheck();
  }
}
