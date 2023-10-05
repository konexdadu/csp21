import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutodetailsComponent } from './autodetails.component';

describe('AutodetailsComponent', () => {
  let component: AutodetailsComponent;
  let fixture: ComponentFixture<AutodetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutodetailsComponent]
    });
    fixture = TestBed.createComponent(AutodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
