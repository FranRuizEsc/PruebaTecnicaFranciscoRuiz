import { PhotosService } from './../../../shared/services/photos.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IPhotoModel } from './../../../shared/models/IPhotoModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {

  id: string;
  photoModel: IPhotoModel;
  photo: Array<object> = [];

  constructor(private actRoute: ActivatedRoute,
    private photoSrv: PhotosService) {

  }

  ngOnInit() {
    this.getDetailPhoto();
  }

  public getDetailPhoto() {
    this.actRoute.params.subscribe((params: Params) => {
      this.id = params['photo_id'];
      this.photoSrv.getPhotoForId(this.id).subscribe(result => {
        this.photoModel = result;
        this.photo = new Array({
          image: this.photoModel.urls.full,
          thumbImage: this.photoModel.urls.thumb,
          alt: this.photoModel.description,
          title: this.photoModel.description
        })
      })
    });
  }
}
