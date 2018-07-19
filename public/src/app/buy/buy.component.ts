import { Component, OnInit } from '@angular/core';

import { CoinService } from './../coin.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
	coins: any;
  Buy: any;
  constructor( private _httpService: CoinService ) { }

  ngOnInit() {
    this.getCoinsFromService()
    this.Buy = { amount: "" }
  }
  getCoinsFromService() {
   this.coins = this._httpService.getCoins()
  }
  onBuyFromService() {
  	this.coins = this._httpService.onBuy(this.Buy)
    this.getCoinsFromService()
  }

}
