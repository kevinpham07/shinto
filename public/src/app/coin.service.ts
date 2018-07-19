import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
	shintocoins: number;
	answer = '12'
	log: object[] = []

	constructor( private _http: HttpClient ) {
	}
	getCoins() {
		if(this.shintocoins){
			return this.shintocoins
		}
		else{
			this.shintocoins = 0;
			return this.shintocoins;
		}
	}
	onSubmit(data) {
		console.log(data)
		if(data.answer == this.answer){
			this.getMine();
		}
		else{
			return
		}
	}
	getMine() {
		this.shintocoins++
		console.log(this.shintocoins)
		this.log.push({ action: "mined", amount: 1, value: 1 })
		return this.shintocoins
	}
	onBuy(data) {
		this.shintocoins += data.amount
		this.log.push({ action: "bought", amount: data.amount, value: 1 })
		return this.shintocoins
	}
	onSell(data) {
		if(this.shintocoins >= data.amount){
			this.shintocoins -= data.amount;
			this.log.push({ action: "sold", amount: data.amount, value: 1 })
			return this.shintocoins;
		}
		else{
			return
		}
	}
	getBrowse() {
		if(this.log) {
			return this.log;
		}
		else{
			return
		}
	}

}
