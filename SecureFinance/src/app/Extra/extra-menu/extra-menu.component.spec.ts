import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraMenuComponent } from './extra-menu.component';

describe('ExtraMenuComponent', () => {
  let component: ExtraMenuComponent;
  let fixture: ComponentFixture<ExtraMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtraMenuComponent]
    });
    fixture = TestBed.createComponent(ExtraMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
