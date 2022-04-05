import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './navbar/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { AddfurnitureComponent } from './admin/addproduct/addfurniture.component';
import { OrderlistComponent } from './admin/orderlist/orderlist.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    MenuComponent,
    AddfurnitureComponent,
    OrderlistComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
