import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratSanteComponent } from './contrat-sante.component';

describe('ContratSanteComponent', () => {
  let component: ContratSanteComponent;
  let fixture: ComponentFixture<ContratSanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContratSanteComponent]
    });
    fixture = TestBed.createComponent(ContratSanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
