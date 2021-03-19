import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';


import { PhotoHomeComponent } from './photo-home/photo-home.component';


const routes: Routes = [
   {
     path: '',
     component: PhotoHomeComponent
   },
   {
     path: ':photo_id',
     component: PhotoDetailComponent
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
