import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgModel } from '@angular/forms'
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'page-contact',
	templateUrl: 'contact.html'
})
export class ContactPage {

	simple: FormGroup
	calcular: FormGroup

	constructor(public navCtrl: NavController, private formbuilder: FormBuilder) {

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
	}

}

