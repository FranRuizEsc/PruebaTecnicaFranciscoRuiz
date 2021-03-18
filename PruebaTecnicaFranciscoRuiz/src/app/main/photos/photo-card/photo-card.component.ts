import { IPhotoModel } from './../../../shared/models/IPhotoModel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.css']
})
export class PhotoCardComponent implements OnInit {

  @Input() photo: IPhotoModel;
  constructor() { }

  ngOnInit() {
  }

}
