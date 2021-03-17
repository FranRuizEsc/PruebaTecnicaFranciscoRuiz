import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';




@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MainModule { }
