import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  [x: string]: any;

  constructor(private httpClientService: HttpClientService, private router: Router) { }

  ngOnInit(): void {
   }
  deleteFurniture() {
    this.httpClientService.deleteFurniture(this.Furniture.id).subscribe(
      (Furniture) => {
        this.router.navigate(['admin', 'dashboard']);
      }
    );
  }


}
