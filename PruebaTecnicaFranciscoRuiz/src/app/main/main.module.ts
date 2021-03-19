import { MatIconModule } from '@angular/material/icon';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MatCardModule} from '@angular/material/card'




@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    MatCardModule,
    MatIconModule
  ]
})
export class MainModule { }
