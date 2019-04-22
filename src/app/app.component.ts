import { Component,OnInit } from '@angular/core';
import {DataService} from './data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weatherapp';
  CityName:string;
  public weatherObj:any;
 Delhi:string=this.CityName;
  constructor(private data: DataService) { }
  ngOnInit(){
  
    this.CityName="Delhi";
    this.gWeather(this.CityName);
  }

  gWeather($event) {
    this.CityName=$event
    this.Delhi=this.CityName;
    console.log( this.CityName);
    this.data.getWeather( this.CityName).subscribe(data => {
      this.weatherObj=data
      console.log( data);
     

    }),
      (error) => console.log(error);
  }
}