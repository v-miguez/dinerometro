import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	horas: number
	minutos: number
	terminado: boolean
	dinero: number
	dineroHora: number

	constructor(public navCtrl: NavController) {

		this.horas = 3
		this.minutos = 59
		this.terminado = false
		this.dinero = 0
		this.dineroHora= 10

		setInterval(()=>{

			if(this.minutos == 0 ){

				if(this.minutos == 0 && this.horas == 0){
					this.terminado = true
				}else{
					this.minutos = 59
					this.horas= this.horas -1	

				}


			}else{
				this.minutos = this.minutos -1
				this.addDinero()
			}



		}, 100)



	}


	addDinero(){
		this.dinero = this.dinero + this.dineroHora/60
		this.dinero = Math.round(this.dinero * 100)/100
	}

}
