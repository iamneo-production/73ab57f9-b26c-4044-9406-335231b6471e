import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CartComponent } from './cart.component';
import { Router } from '@angular/router';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let cartService:any;
  let loginService:any;
  let router:any;

  beforeEach(() => {
    component = new CartComponent(router,cartService,loginService);
  });

  it('test_case16', () => {
    expect(component).toBeTruthy();
  });
});
