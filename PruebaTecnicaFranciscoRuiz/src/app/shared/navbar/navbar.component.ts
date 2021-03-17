import { SearcherService } from './../services/searcher.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor( public searchSrv: SearcherService,
              private router: Router) { }

  ngOnInit() {
    this.searchSrv.searchClickAction.subscribe( (resp: any) => {
      this.router.navigate(['/photo'], { queryParams : { query: resp}});
    })
  }

}
