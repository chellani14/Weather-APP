import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.css']
})
export class CityInputComponent implements OnInit {
 CityName:string;
 @Input() public weatherObj;
 @Input() public Delhi;
 
@Output() CityEvent=new EventEmitter<string>()

  constructor() { }
  getWeather()
  {
    this.CityEvent.emit(this.CityName)
  }
  ngOnInit() {
    
  }
}

