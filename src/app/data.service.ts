import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient) {}
    getWeather(city:string)
    {
      return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=f2ad7d3ad297d16012f709e2d55469ed `, {responseType:'json'})
    }
 }
