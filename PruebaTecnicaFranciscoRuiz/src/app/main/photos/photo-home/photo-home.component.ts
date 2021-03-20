import { SearchModel } from './../../../shared/models/searchModel';
import { SearcherService } from './../../../shared/services/searcher.service';
import { PhotosService } from './../../../shared/services/photos.service';
import { IPhotoModel } from './../../../shared/models/IPhotoModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-photo-home',
  templateUrl: './photo-home.component.html',
  styleUrls: ['./photo-home.component.css']
})
export class PhotoHomeComponent implements OnInit {

  searchModel = new SearchModel();
  listPhotos: IPhotoModel[];
  observable: Observable<IPhotoModel[]>

  subs: Subscription;

  constructor( private photoSrv: PhotosService,
              private searcherSrv: SearcherService,
              private activeteRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.getQeuryWithoutRepaeat();
    this.getPhotos();
  }


//debounceTime(1000) let a second pass to start searching when the letters are entered
//Compares the entered values and sends the results without duplicates
  public getQeuryWithoutRepaeat(){

    const newQuery = this.activeteRoute.snapshot.queryParamMap.get('query');
    this.searchModel.query = newQuery ? newQuery : '';

    this.subs = this.searcherSrv.searchLetter.pipe(debounceTime(200),
      distinctUntilChanged()
    ).subscribe(value => {
      this.searchModel.query = value;
      this.searchModel.page = 1;
      this.getPhotos();
    });
  }

  //Get the search result
  public getPhotos(){
    this.observable = (this.searchModel.query.length > 0)?
    this.photoSrv.searchAllPhotos(this.searchModel) : this.photoSrv.getListAllPhotos(this.searchModel.page);

    this.observable.subscribe( (result: any) =>{
      if(this.searchModel.page === 1){
        this.listPhotos = result;
      } else{
        this.listPhotos.push(...result);
      }
    });
  }

  public onClickId(event){
    console.info(event);
    this.goDetail(event);
  }

  public goDetail(id: string){
    this.router.navigate(['/main/photos/photo',id]);
  }

// Load more images on the page
  public loadMoreImages(){
    this.searchModel.page++;
    this.getPhotos();
  }

}
