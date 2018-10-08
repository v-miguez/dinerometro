import { tassign } from 'tassign'

export interface IAppState {

	netoHoras: number
	
}


export const INITIAL_STATE: IAppState = {

	netoHoras: 10
}


export function rootReducer(state, action){

	switch (action.type) {
		case "GUARDAR_NETO": 
		 return tassign(state, action.data)


	}

	return state
}