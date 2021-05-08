import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutsubtotalComponent } from './checkoutsubtotal.component';

describe('CheckoutsubtotalComponent', () => {
  let component: CheckoutsubtotalComponent;
  let fixture: ComponentFixture<CheckoutsubtotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutsubtotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutsubtotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
