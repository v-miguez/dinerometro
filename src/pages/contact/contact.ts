import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgModel } from '@angular/forms'
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NgRedux } from '@angular-redux/store'
import { IAppState } from '../../store'

import { HomePage } from '../home/home'

@Component({
	selector: 'page-contact',
	templateUrl: 'contact.html'
})
export class ContactPage {

	simple: FormGroup
	calcular: FormGroup
	sueldoHora: number

	constructor(public navCtrl: NavController, private formbuilder: FormBuilder, private NgRedux: NgRedux<IAppState>) {

		this.simple = new FormGroup({
			dineroHora: new FormControl('',[Validators.required, Validators.pattern(/^(\d*\.)?\d+$/)]),
			horas: new FormControl('',[Validators.required, Validators.pattern(/^\d+$/)])
		})
		
		this.calcular = new FormGroup({
			neto: new FormControl('',[Validators.required, Validators.pattern(/^\d+\.\d{0,2}$/)]),
			dias: new FormControl('',[Validators.required, Validators.pattern(/^\d+\.\d{0,2}$/)]),
			horasDia: new FormControl('',[Validators.required, Validators.pattern(/^\d+\.\d{0,2}$/)])

		})

	}


	enviarFormulario(){
		console.log(this.simple.value)
		let neto = this.simple.value.dineroHora
		let horas = this.simple.value.horas

		this.guardarRedux(neto, horas)

		this.navCtrl.setRoot(HomePage)

	}

	calcularSueldoHoras(){
		console.log(this.calcular.value)
		this.sueldoHora = this.calcular.value.neto/(this.calcular.value.dias * this.calcular.value.horasDia)
		let neto = this.sueldoHora
		let horas = this.calcular.value.horasDia

		this.guardarRedux(neto, horas)

		this.navCtrl.setRoot(HomePage)

	}

	guardarRedux(neto, horas){
		this.NgRedux.dispatch({
			type: "GUARDAR_NETO",
			data: {netoHoras: neto, hora: horas }
		})
		localStorage.setItem('redux_data', JSON.stringify(this.NgRedux.getState()))

	}


}

