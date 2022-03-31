import { Component, OnInit } from '@angular/core';
import { Furniture } from 'src/app/model/furniture';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit 
{
  dashboard: Array<Furniture>;
  selectedBook: Furniture;
  action: string;

  constructor() {}
   

  ngOnInit(){
    this.dashboard = new Array<Furniture>();

    const f1 = new Furniture();
    f1.id = 1;
    f1.name = 'b1';
    f1.company = 'a1';
    f1.price = 5;

    const f2 = new Furniture();
    f2.id = 2;
    f2.name = 'b2';
    f2.company = 'a2';
    f2.price = 15;

    this.dashboard.push(f1);
    this.dashboard.push(f2);
  }
    

}
