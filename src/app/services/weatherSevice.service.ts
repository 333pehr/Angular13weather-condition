import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itemp } from '../Models/weather';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WeatherSeviceService {
  constructor(private http: HttpClient) { }

  getWeather(){
    return this.http.get(environment.apiUrl)
    .pipe(map((response)=> response as Itemp));
  }
}
