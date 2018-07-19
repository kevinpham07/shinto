import { Component, OnInit } from '@angular/core';

import { CoinService } from './../coin.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
	ledger: object[];
  constructor( private _httpService: CoinService ) {
  }

  ngOnInit() {
  	this.getBrowseFromService()
  }

  getBrowseFromService() {
  	this.ledger = this._httpService.getBrowse()
  	console.log(this.ledger)
  }
}
