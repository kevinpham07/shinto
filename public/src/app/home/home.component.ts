import { Component, OnInit } from '@angular/core';

import { CoinService } from './../coin.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	coins: number;
  constructor( private _httpService: CoinService) { }

  ngOnInit() {
  	console.log("****************COMPONENT*****************")
  	this.getCoinsFromService();
  }
  getCoinsFromService() {
 	this.coins = this._httpService.getCoins()
 	console.log(this.coins)
  }
}
