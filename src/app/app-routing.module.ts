import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoodComponent } from './Mood/Mood.component';
import { HomeComponent } from './Home/Home.component';
const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'mood', component: MoodComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
