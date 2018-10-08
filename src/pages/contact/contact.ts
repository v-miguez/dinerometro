import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgModel } from '@angular/forms'
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NgRedux } from '@angular-redux/store'
import { IAppState } from '../..//store.ts'

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
			dineroHora: new FormControl('',[Validators.required, Validators.pattern(/^\d+$/)]),
			horas: new FormControl('',[Validators.required, Validators.pattern(/^\d+$/)])
		})
		
		this.calcular = new FormGroup({
			neto: new FormControl('',[Validators.required, Validators.pattern(/^\d+$/)]),
			dias: new FormControl('',[Validators.required, Validators.pattern(/^\d+$/)]),
			horasDia: new FormControl('',[Validators.required, Validators.pattern(/^\d+$/)])

		})

	}


	enviarFormulario(){
		console.log(this.simple.value)
	}

	calcularSueldoHoras(){
		console.log(this.calcular.value)
		this.sueldoHora = this.calcular.value.neto/(this.calcular.value.dias * this.calcular.value.horasDia)
		console.log(this.sueldoHora)
		let neto = this.sueldoHora
		this.NgRedux.dispatch({
			type: "GUARDAR_NETO",
			data: {netoHoras: neto}
		})
		console.log("desde redux")
	}

}

