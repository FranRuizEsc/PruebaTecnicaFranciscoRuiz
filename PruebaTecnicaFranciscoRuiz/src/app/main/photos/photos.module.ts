import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotoHomeComponent } from './photo-home/photo-home.component';
import { PhotoCardComponent } from './photo-card/photo-card.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';


@NgModule({
  declarations: [
    PhotoHomeComponent,
    PhotoCardComponent,
    PhotoDetailComponent
  ],

  exports:[
    PhotoCardComponent
  ],

  imports: [
    CommonModule,
    PhotosRoutingModule
  ]
})
export class PhotosModule { }
