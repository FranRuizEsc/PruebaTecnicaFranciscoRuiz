import { SearcherService } from './../services/searcher.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor( public searchSrv: SearcherService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    /* this.searchSrv.searchClickAction.subscribe( resp => {
      this.router.navigate(['/photo'], {relativeTo: this.activatedRoute});
    }) */
  }

  public pulseSearch(){
    this.searchSrv.searchClickAction.subscribe( resp => {
      this.router.navigate(['/photo'], {relativeTo: this.activatedRoute});
    });
  }

}
