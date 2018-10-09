import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgRedux } from '@angular-redux/store'
import { IAppState } from '../..//store'
import { ToastController } from 'ionic-angular';


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
	funcionando: number
	intervalo: any
	total: string
	contadorCiclo: number

	constructor(public navCtrl: NavController, private ngRedux: NgRedux<IAppState>, private toast: ToastController) {
		console.log(ngRedux.getState())
		this.horas = ngRedux.getState().hora
		this.minutos = 0
		this.terminado = false
		this.dinero = 0
		this.dineroHora= ngRedux.getState().netoHoras
		this.funcionando = 0
		this.total = '0'
		this.contadorCiclo = 0

		this.ngRedux.subscribe(()=>{
			let stateStore = this.ngRedux.getState()

			this.horas = stateStore.hora
			this.dineroHora = stateStore.netoHoras
		})

	}


	addDinero(){
		this.dinero += this.dineroHora/60
		this.dinero += 0.00000000001
		this.total = this.dinero.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]

	}

	avisos(tipo){
		switch (tipo) {
			case "cafe":
			let cafe = this.toast.create({
				message: 'Llevas la mitad del tiempo, ¿nos tomamos un café? ☕️ 😋',
				duration: 3000,
				position: 'top'})
			cafe.present();

			break;

			default:
				// code...
				break;
			}
		}


		contarTiempo(){

			if(this.minutos <= 0 ){

				if(this.minutos == 0 && this.horas == 0){
					clearInterval(this.intervalo)

				}else{
					this.minutos = 59
					this.horas= this.horas -1	
					

					}




				}else{
					this.minutos = this.minutos -1
					switch (this.horas) {
						case (this.ngRedux.getState().hora/2):
						if(this.minutos==1)this.avisos("cafe")
						break;
						
						default:
							// code...
							break;
						}

				}
			}


			empezarCuenta(){
				this.funcionando++
				if(this.funcionando == 1){

					this.intervalo = setInterval(()=>{



						this.contarTiempo()



						if(this.contadorCiclo >0 ) {this.addDinero()}
							this.contadorCiclo++


					}, 200)
				}else{
					clearInterval(this.intervalo)
					this.funcionando = 0
					this.horas = this.ngRedux.getState().hora
					this.minutos = 0
					this.dineroHora= this.ngRedux.getState().netoHoras
					this.dinero = 0
					this.total = '0'

				}
			}

		}

