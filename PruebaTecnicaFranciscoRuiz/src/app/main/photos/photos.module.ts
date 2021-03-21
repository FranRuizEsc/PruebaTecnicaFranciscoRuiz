import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotoHomeComponent } from './photo-home/photo-home.component';
import { PhotoCardComponent } from './photo-card/photo-card.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material';
import { NgxScrollTopModule} from 'ngx-scrolltop';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';



@NgModule({
  declarations: [
    PhotoHomeComponent,
    PhotoCardComponent,
    PhotoDetailComponent
  ],

  exports:[
    PhotoCardComponent,
    PhotoDetailComponent
  ],

  imports: [
    CommonModule,
    PhotosRoutingModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatTabsModule,
    NgxScrollTopModule,
    NgImageFullscreenViewModule
  ]
})
export class PhotosModule { }
