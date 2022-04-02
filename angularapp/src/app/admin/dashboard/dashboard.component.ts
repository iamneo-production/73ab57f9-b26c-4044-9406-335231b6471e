import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Furniture } from 'src/app/model/furniture';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  [x: string]: any;
  dashboard: Array<Furniture>;
  selectedFurniture: Furniture;
  action: string;

  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.httpClientService.getdashboard().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    this.activedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
        const id = params['id'];
        if (id) {
          this.selectedFurniture = this.dashboard.find(Furniture => {
            return Furniture.id === +id;
          });
      }
    );
  }

  handleSuccessfulResponse(response) {
    this.dashboard = response;
    this.dashboardRecieved = response;
    for (const Furniture of this.dashboardRecieved) {
    
      const furniturewithRetrievedImageField = new Furniture();
      furniturewithRetrievedImageField.id = Furniture.id;
      furniturewithRetrievedImageField.name = Furniture.name;
      furniturewithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + Furniture.picByte;
      furniturewithRetrievedImageField.company = Furniture.company;
      furniturewithRetrievedImageField.price = Furniture.price;
      furniturewithRetrievedImageField.picByte=Furniture.picByte;
      this.dashboard.push(furniturewithRetrievedImageField);
    }
  }

  addFurniture() {
    this.selectedFurniture = new Furniture();
    this.router.navigate(['admin', 'dashboard'], { queryParams: { action: 'add' } });
  }
}