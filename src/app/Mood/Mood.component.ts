import { Component, Input, OnInit } from '@angular/core';
import { __importDefault } from 'tslib';
import { WeatherSeviceService } from '../services/weatherSevice.service';
import { Itemp } from '../Models/weather';

@Component({
  selector: 'app-Mood',
  templateUrl: './Mood.component.html',
  styleUrls: ['./Mood.component.css']
})
export class MoodComponent implements OnInit {
  @Input('parentData1') public dateTime: string;
  weather: number;
  indexofdate: number;
  constructor(private weatherServise: WeatherSeviceService) { 
  }
  weathers: Itemp = <Itemp>{};
  ngOnInit(): void {
  }
  getWeather() {
    this.weatherServise.getWeather().subscribe((data)=> {
    this.weathers = data;
    this.indexofdate = this.weathers.hourly.time.indexOf(this.dateTime);
    console.log(this.indexofdate);
    this.weather = this.weathers.hourly.temperature_2m[this.indexofdate];
  });
  }
  getError(): boolean{
      if(this.indexofdate == -1){
        return true;
      }
      else{
        return false;
      }
  }
  getMood(){
    let Mood = '';
    
    if(0 <= this.weather && this.weather <= 5){
      Mood = 'Sick';
    }
    else if(5 < this.weather && this.weather <= 10){
      Mood = 'Depressed';
    }
    else if(10 < this.weather && this.weather <= 15){
      Mood = 'Low';
    }
    else if(15 < this.weather && this.weather <= 25){
      Mood = 'Cheerful';
    }
    else if(25 < this.weather && this.weather <= 30){
      Mood = 'Joyful';
    }
    else if(30 < this.weather && this.weather <= 35){
      Mood = 'Bored';
    }
    else if(35 < this.weather){
           Mood = 'Angry';
    }
    
    return Mood;
    }
}
