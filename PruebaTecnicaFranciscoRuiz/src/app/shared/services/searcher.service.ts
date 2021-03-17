import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearcherService {

  //Subject devuelve el mismo valor a los distintos observables
  searchLetter: Subject<string> = new Subject<string>();
  searchClickAction: Subject<string> = new Subject<string>();


  private actionsActive = true;

  constructor() { }

  //Busca segun se vaya introduciondo letra a letra
  public searchInputLetter(letter: HTMLInputElement): void{
    console.info("Estoy en metodo");
    console.info(letter);
    this.searchLetter.next(letter.value);
  }

  //Busca cuando se pulse el intro o el boton buscar
  public searchInputClickAction(word: HTMLInputElement): void{
    console.info("Estoy en metodo action");
    if (this.actionsActive){
      console.info(word);
      this.searchClickAction.next(word.value);

    }

  }
}
