import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearcherService {

  //Subject returns the same value to the different observables
  searchLetter: Subject<string> = new Subject<string>();

  constructor() { }

  //performs the search according to the entered value
  public searchInputLetter(letter: HTMLInputElement){
    this.searchLetter.next(letter.value);
  }

}
