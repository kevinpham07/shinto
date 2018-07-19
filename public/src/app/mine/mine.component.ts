import { Component, OnInit } from '@angular/core';

import { CoinService } from './../coin.service'

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
	coins: any;
	Mine: any;
  constructor( private _httpService: CoinService) { }

  ngOnInit() {
  	this.Mine = { answer: "" };
  	this.getCoinsFromService();
  }
  getCoinsFromService() {
 	this.coins = this._httpService.getCoins()
 	console.log(this.coins)
  }
  onSubmitFromService(){
  	console.log("********Got submitted********")
  	this.coins = this._httpService.onSubmit(this.Mine)
  	this.getCoinsFromService()
  	this.Mine = { answer: "" };
  }
}
