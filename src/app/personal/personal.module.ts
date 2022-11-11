import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListPersonalComponent } from './pages/list-personal/list-personal.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListPersonalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PersonalModule { }
