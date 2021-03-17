import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';





@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class SharedModule { }
