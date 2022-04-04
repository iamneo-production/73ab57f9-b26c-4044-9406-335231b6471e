import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let router:any;
  let signupService:any;
  beforeEach(() => {
    component = new SignupComponent(router,signupService);
  });

  it('test_case14', () => {
    expect(component).toBeTruthy();
  });
});
