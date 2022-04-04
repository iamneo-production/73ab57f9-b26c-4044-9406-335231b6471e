import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

import { AdminNavComponent } from './admin-nav.component';

describe('AdminNavComponent', () => {
  let component: AdminNavComponent;
  let fixture: ComponentFixture<AdminNavComponent>;
  let router:Router;
  let loginServices:LoginService;

  beforeEach(() => {
    component = new AdminNavComponent(loginServices,router);
  });

  it('test_case17', () => {
    expect(component).toBeDefined();
});

});
