import { SearchModel } from './../models/searchModel';
import { environment } from './../../../environments/environment';
import { IPhotoModel } from './../models/IPhotoModel';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor( private httpClient: HttpClient) { }


  public getListAllPhotos(page = 1, perPage = 24, orderBy: 'latest' | 'oldest' | 'popular' = 'latest'): Observable<IPhotoModel[]> {
    const params: HttpParams = new HttpParams()
      .append('page', String(page))
      .append('per_page', String(perPage))
      .append('order_by', orderBy);
    return this.httpClient.get<IPhotoModel[]>(environment.apiUrl + '/photos', {params: params}).pipe(
      // tap(source => console.log(source))
    );
  }

  public getPhotoForId(id: string): Observable<IPhotoModel>{
    return this.httpClient.get<IPhotoModel>(environment.apiUrl + '/photos'+ id).pipe(tap());
  }


  public searchAllPhotos(seacrh: SearchModel): Observable<IPhotoModel[]>{

    let params: HttpParams = new HttpParams().append('query', String(seacrh.query)).append('page', String(seacrh.page))
      .append('per_page', String(seacrh.perPage));

    return  this.httpClient.get<any>(environment.apiUrl + '/search/photos', {params: params}).pipe(
      map(response => response.results),
    );
  }
}
