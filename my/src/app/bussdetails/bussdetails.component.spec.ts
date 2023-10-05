import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussdetailsComponent } from './bussdetails.component';

describe('BussdetailsComponent', () => {
  let component: BussdetailsComponent;
  let fixture: ComponentFixture<BussdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BussdetailsComponent]
    });
    fixture = TestBed.createComponent(BussdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
