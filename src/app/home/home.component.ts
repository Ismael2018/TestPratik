import { Component, OnInit } from '@angular/core';
import { WebserviceService } from '../webservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private ws : WebserviceService) { } 
  
  FetchedData : any; // La variable qui recevra des données de l'observable

  ngOnInit(): void {
    // A l'initialisation on appelle le méthode getdata qui nous permettra de 
    //recupérer les fake data via notre Service
   
     this.ws.getdata().subscribe(res => this.FetchedData = res)
  }



}
