import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoodComponent } from './Mood/Mood.component';
import { WeatherSeviceService } from './services/weatherSevice.service';
import { HomeComponent } from './Home/Home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [				
    AppComponent,
      MoodComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [WeatherSeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
