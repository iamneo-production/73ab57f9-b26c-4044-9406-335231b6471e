import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Furniture } from '../model/furniture';
@Injectable({
    providedIn: 'root'
  })
  export class HttpClientService {
    [x: string]: any;
    
  
    constructor(private httpClient: HttpClient) {
    }
    getdashboard() {
        return this.httpClient.get<Furniture[]>('http://localhost:8080/dashboard/get');
      }
    }
    addFurniture(newFurniture: Furniture) {
        return this.httpClient.post<Furniture>('http://localhost:8080/dashboard/add', newFurniture);
      }
    deleteFurniture(id) {
        return this.httpClient.delete<Furniture>('http://localhost:8080/dashhboard/' + id);
      }
    














