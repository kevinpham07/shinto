import { Component, OnInit } from '@angular/core';

import { CoinService } from './../coin.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
	coins: any;
	Sell: any;
  constructor( private _httpService: CoinService ) { }

  ngOnInit() {
  	this.getCoinsFromService()
  	this.Sell = { amount: ''}
  }
  getCoinsFromService() {
 	this.coins = this._httpService.getCoins()
  }
  onSellFromService() {
  	this.coins = this._httpService.onSell(this.Sell)
  	this.getCoinsFromService();
  	this.Sell = { amount: ''}
  }
}
