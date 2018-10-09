import { tassign } from 'tassign'

export interface IAppState {

	hora: number
	netoHoras: number
	
}


export const INITIAL_STATE: IAppState = {

	hora: 7,
	netoHoras: 10
}

export function rootReducer(state, action){

	switch (action.type) {
		case "GUARDAR_NETO": 
		 return tassign(state, action.data)


	}

	return state
}