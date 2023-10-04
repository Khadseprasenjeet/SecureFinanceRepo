import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraheaderComponent } from './extraheader.component';

describe('ExtraheaderComponent', () => {
  let component: ExtraheaderComponent;
  let fixture: ComponentFixture<ExtraheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtraheaderComponent]
    });
    fixture = TestBed.createComponent(ExtraheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
