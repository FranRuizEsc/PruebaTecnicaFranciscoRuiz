import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearcherService } from 'src/app/shared/services/searcher.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public searchSrv: SearcherService,
              private router: Router) { }

  ngOnInit() {
    this.searchSrv.searchClickAction.subscribe( (resp: any) => {
      this.router.navigate(['../', "photos"], { queryParams : { query: resp}});
    })
  }

}
