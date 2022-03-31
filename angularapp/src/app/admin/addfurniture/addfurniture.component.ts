import { Component, OnInit } from '@angular/core';
import { Furniture } from 'src/app/model/furniture';

@Component({
  selector: 'app-addfurniture',
  templateUrl: './addfurniture.component.html',
  styleUrls: ['./addfurniture.component.css']
})
export class AddfurnitureComponent implements OnInit {
  book: Furniture;
  private selectedFile;
  imgURL: any;

  constructor() { }

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
}
