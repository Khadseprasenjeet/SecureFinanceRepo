import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehomeComponent } from './rehome.component';

describe('RehomeComponent', () => {
  let component: RehomeComponent;
  let fixture: ComponentFixture<RehomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RehomeComponent]
    });
    fixture = TestBed.createComponent(RehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
