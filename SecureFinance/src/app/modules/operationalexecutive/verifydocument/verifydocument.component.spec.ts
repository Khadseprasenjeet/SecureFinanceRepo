import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifydocumentComponent } from './verifydocument.component';

describe('VerifydocumentComponent', () => {
  let component: VerifydocumentComponent;
  let fixture: ComponentFixture<VerifydocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifydocumentComponent]
    });
    fixture = TestBed.createComponent(VerifydocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
