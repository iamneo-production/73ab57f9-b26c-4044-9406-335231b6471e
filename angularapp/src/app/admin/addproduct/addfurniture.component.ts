import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Furniture } from 'src/app/model/furniture';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-addfurniture',
  templateUrl: './addfurniture.component.html',
  styleUrls: ['./addfurniture.component.css']
})
export class AddfurnitureComponent implements OnInit {
  [x: string]: any;
  
  furniture: Furniture;
  private selectedFile;
  imgURL: any;

  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };
  }
  saveFurniture() {

    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.selectedFile.imageName = this.selectedFile.name;

    this.httpClient.post('http://localhost:8080/dashboard/upload', uploadData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.httpClientService.addFurniture(this.furniture).subscribe(
            (furniture) => {
              this.furnitureAddedEvent.emit();
              this.router.navigate(['admin', 'dashboard']);
            }
          );
          console.log('Image uploaded successfully');
        } else {
          console.log('Image not uploaded successfully');
        }
      }
      );
  }
  
}
