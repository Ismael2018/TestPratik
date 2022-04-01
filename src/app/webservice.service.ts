import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //Downgraded to V.6.6.0 cause V7 is not stable yet

@Injectable({
  providedIn: 'root'
})

export class WebserviceService {

  url : string = "https://fakestoreapi.com"; // Url for fake data

  constructor(public http : HttpClient) { }

 /* httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*",'Access-Control-Allow-Methods': '*'})
  }*/

  getdata(): Observable<[]> { //Method to fetch fake data
    return this.http.get<[]>(this.url+'/products');
 } 
 

 
}
