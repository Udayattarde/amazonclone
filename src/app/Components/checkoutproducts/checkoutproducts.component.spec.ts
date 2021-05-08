import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutproductsComponent } from './checkoutproducts.component';

describe('CheckoutproductsComponent', () => {
  let component: CheckoutproductsComponent;
  let fixture: ComponentFixture<CheckoutproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
