import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearcherService {

  //Subject devuelve el mismo valor a los distintos observables
  searchLetter: Subject<string> = new Subject<string>();

  constructor() { }

  //Busca segun se vaya introduciondo letra a letra
  public searchInputLetter(letter: HTMLInputElement){
    this.searchLetter.next(letter.value);
  }

}
