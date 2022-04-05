import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let router:any;
  let productService:any;
  let productDeleteService:any;
  let productEditService:any
  beforeEach(() => {
    component = new DashboardComponent(router,productService,productDeleteService,productEditService);
  });
  it('test_case18', () => {
    expect(component).toBeTruthy();
  });
});
