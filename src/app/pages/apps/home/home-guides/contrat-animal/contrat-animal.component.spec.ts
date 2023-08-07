import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratAnimalComponent } from './contrat-animal.component';

describe('ContratAnimalComponent', () => {
  let component: ContratAnimalComponent;
  let fixture: ComponentFixture<ContratAnimalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContratAnimalComponent]
    });
    fixture = TestBed.createComponent(ContratAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
